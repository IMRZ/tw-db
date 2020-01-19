
import { camelCase } from "lodash";
import { Relationship } from "./Relationship";
import { Context } from "./Context";

export class Column {
  static readonly FOREIGN_PREFIX = "_";

  readonly fieldName: string;
  readonly fieldType: string;
  readonly isForeign: boolean;
  readonly relationship?: Relationship;

  readonly name: string;

  constructor(
    fieldName: string,
    fieldType: string,
    isForeign: boolean,
    relationship: Relationship
  ) {
    this.fieldName = fieldName;
    this.fieldType = fieldType;
    this.isForeign = isForeign;
    this.relationship = relationship;

    this.name = this.formatName();
  }

  static fromJson(json: any, relationships: Relationship[]): Column[] {
    const fields = Array.isArray(json.root.field) ? json.root.field : [json.root.field];

    return fields.map((field: any) => {
      const relationship = relationships.find(rel => rel.columnName === field.name);

      return new Column(
        field.name,
        field.field_type,
        !!field.column_source_table,
        relationship
      );
    });
  }

  private formatName() {
    const prefix = (this.isForeign || this.relationship) ? Column.FOREIGN_PREFIX : "";
    return `${prefix}${camelCase(this.fieldName)}`;
  }

  private getSimpleType() {
    switch (this.fieldType) {
      case "autonumber":
      case "integer":
      case "decimal":
      case "double":
      case "longinteger":
      case "single":
      case "card64":
        return "number";
      case "text":
        return "string";
      case "yesno":
        return "boolean";
      default:
        throw new Error(`Unknown fieldType: ${this.fieldType}`);
    }
  }

  get type(): string {
    if (this.relationship) {
      const sourceTable = Context.tables.find(table => table.name === this.relationship.foreignTableName);
      const sourceColumn = sourceTable.columns.find(column => column.fieldName === this.relationship.foreignColumnName);
      return sourceColumn.type;
    } else if (this.isForeign) {
      /*
        If a field is marked as foreign, but does not have a corresponding relationship.
        The 'any' type is used because we are unable to determine exact type from the schema.
        Probably not an implemented table, so this is fine.
      */
      return "any";
    } else {
      return this.getSimpleType();
    }
  }
}

export default Column;
