
import { CollectionCache, CollectionKey } from "../../../common";
import { Resources } from "./Resources";

export namespace Commodities {
  export const KEY = new CollectionKey("commodities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly baselinePricePerUnit: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.baselinePricePerUnit = values["baseline_price_per_unit"];
    }
    
    get key(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._key);
    }
  }
}

export default Commodities;
