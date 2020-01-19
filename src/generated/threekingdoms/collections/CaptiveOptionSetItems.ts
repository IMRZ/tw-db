
import { CollectionCache, CollectionKey } from "../../../common";
import { CaptiveOptionSets } from "./CaptiveOptionSets";
import { CaptiveOptions } from "./CaptiveOptions";

export namespace CaptiveOptionSetItems {
  export const KEY = new CollectionKey("captive_option_set_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _set: string;
    readonly _item: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._set = values["set"];
      this._item = values["item"];
    }
    
    get set(): CaptiveOptionSets.Entry | undefined {
      const collection = <CaptiveOptionSets.Entry[]>this.collectionCache.getCollection(CaptiveOptionSets.KEY, CaptiveOptionSets.Entry);
      return collection.find(entry => entry.key === this._set);
    }
    
    get item(): CaptiveOptions.Entry | undefined {
      const collection = <CaptiveOptions.Entry[]>this.collectionCache.getCollection(CaptiveOptions.KEY, CaptiveOptions.Entry);
      return collection.find(entry => entry.key === this._item);
    }
  }
}

export default CaptiveOptionSetItems;
