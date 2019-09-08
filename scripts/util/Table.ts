
import { camelCase, upperFirst } from "lodash";
import { Column } from "./Column";
import { Context } from "./Context";
import { Relationship } from "./Relationship";

export class Table {
  readonly name: string;
  readonly namespace: string;
  readonly json: any;
  readonly context: any;

  readonly relationships: Relationship[];
  readonly columns: Column[];

  constructor(
    name: string,
    json: any,
  ) {
    this.name = name;
    this.namespace = upperFirst(camelCase(name));
    this.json = json;

    this.relationships = Context.relationships.filter((relationship) => {
      return relationship.tableName === this.name;
    });

    this.columns = Column.fromJson(this.json, this.relationships);
  }

  static fromJson(schemas: { name: string, json: any }[]): Table[] {
    return schemas.map((schema) => new Table(schema.name, schema.json));
  }

  emitImports() {
    const relationships = this.columns
      .filter(column => column.relationship)
      .map(column => column.relationship);

    const importStatements: any = relationships.reduce((accumulator, relationship) => {
      const collectionName = upperFirst(camelCase(relationship.foreignTableName));

      if (relationship.foreignTableName !== this.name && accumulator[relationship.foreignTableName] === undefined) {
        accumulator[relationship.foreignTableName] = `import { ${collectionName} } from "./${collectionName}";`;
      }

      return accumulator;
    }, {});

    const importsList: any[] = Object.values(importStatements);

    if (importsList.length > 0 || this.relationships.length > 0) {
      return importsList.join("\n");
    } else {
      return "";
    }
  }

  emitProperties() {
    return this.columns.map((column) => {
      return `readonly ${column.name}: ${column.type};`;
    }).join("\n    ");
  }

  emitForeign() {
    return this.columns
      .filter(field => field.relationship)
      .map(({ fieldName, relationship }) => {
        const name = camelCase(fieldName);
        const foreignTable = Context.tables.find(table => table.name === relationship.foreignTableName);
        const foreignColumn = foreignTable.columns.find(c => c.fieldName === relationship.foreignColumnName);
        const collectionKey = `${foreignTable.namespace}.KEY`;
        const collectionType = `${foreignTable.namespace}.Entry`;

        return `
    get ${name}(): ${collectionType} | undefined {
      const collection = <${collectionType}[]>this.collectionCache.getCollection(${collectionKey}, ${collectionType});
      return collection.find(entry => entry.${foreignColumn.name} === this._${name});
    }`;
      }).join("\n    ");
  }

  emitAssignment() {
    return this.columns.map((column) => {
      if (column.type === "boolean") {
        return `this.${column.name} = !!values["${column.fieldName}"];`;
      } else {
        return `this.${column.name} = values["${column.fieldName}"];`;
      }
    }).join("\n      ");
  }

  emitCollection() {
    const namespace = upperFirst(camelCase(this.namespace));

    return `
import { CollectionCache, CollectionKey } from "../../../common";
${this.emitImports()}

export namespace ${namespace} {
  export const KEY = new CollectionKey("${this.name}");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    ${this.emitProperties()}

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      ${this.emitAssignment()}
    }
    ${this.emitForeign()}
  }
}

export default ${namespace};
`;
  }
}
