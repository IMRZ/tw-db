
import { CollectionCache, CollectionKey } from "../../../common";
import { TExcImplementedTables } from "./TExcImplementedTables";

export namespace TExcLocalisableFields {
  export const KEY = new CollectionKey("TExc_LocalisableFields");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _tableName: string;
    readonly field: string;
    readonly destinationFile: string;
    readonly readyForExport: boolean;
    readonly spreadsheet: string;
    readonly fieldAsKey: string;
    readonly forVo: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._tableName = values["table_name"];
      this.field = values["field"];
      this.destinationFile = values["destination_file"];
      this.readyForExport = !!values["ready_for_export"];
      this.spreadsheet = values["spreadsheet"];
      this.fieldAsKey = values["field_as_key"];
      this.forVo = !!values["for_vo"];
    }
    
    get tableName(): TExcImplementedTables.Entry | undefined {
      const collection = <TExcImplementedTables.Entry[]>this.collectionCache.getCollection(TExcImplementedTables.KEY, TExcImplementedTables.Entry);
      return collection.find(entry => entry.tableName === this._tableName);
    }
  }
}

export default TExcLocalisableFields;
