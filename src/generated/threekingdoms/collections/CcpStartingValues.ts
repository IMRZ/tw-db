
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace CcpStartingValues {
  export const KEY = new CollectionKey("ccp_starting_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitKey: string;
    readonly startingCcpValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitKey = values["unit_key"];
      this.startingCcpValue = values["starting_ccp_value"];
    }
    
    get unitKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitKey);
    }
  }
}

export default CcpStartingValues;
