
import { CollectionCache, CollectionKey } from "../../../common";
import { TExcPackCategories } from "./TExcPackCategories";

export namespace TExcImplementedTables {
  export const KEY = new CollectionKey("TExc_ImplementedTables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly tableName: string;
    readonly designer: string;
    readonly implemented: boolean;
    readonly implementer: string;
    readonly modified: boolean;
    readonly _destinationPack: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.tableName = values["table_name"];
      this.designer = values["Designer"];
      this.implemented = !!values["Implemented"];
      this.implementer = values["Implementer"];
      this.modified = !!values["Modified"];
      this._destinationPack = values["destination_pack"];
    }
    
    get destinationPack(): TExcPackCategories.Entry | undefined {
      const collection = <TExcPackCategories.Entry[]>this.collectionCache.getCollection(TExcPackCategories.KEY, TExcPackCategories.Entry);
      return collection.find(entry => entry.packCategory === this._destinationPack);
    }
  }
}

export default TExcImplementedTables;
