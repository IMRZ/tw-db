import { Table } from "./util/Table";
import { camelCase } from "lodash";

export function generateDb(tables: Table[]) {
  function emitGetters() {
    return tables.map((table) => {
      const propertyname = camelCase(table.name);
      const collectionKey = `collections.${table.namespace}.KEY`;
      const type = `collections.${table.namespace}.Entry`;

      return `  get ${propertyname}() { return <${type}[]>this.collectionCache.getCollection(${collectionKey}, ${type}); }`
    }).join("\n");
  }

  const db =`
import * as collections from "./collections";
import { CollectionCache } from "../../common";

export class Database {
  private readonly collectionCache: CollectionCache;

  constructor(pathToDb: string) {
    this.collectionCache = new CollectionCache(pathToDb);
  }

${emitGetters()}
}
`;

  return db;
}
