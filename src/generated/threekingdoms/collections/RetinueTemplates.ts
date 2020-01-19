
import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueTypes } from "./RetinueTypes";

export namespace RetinueTemplates {
  export const KEY = new CollectionKey("retinue_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _retinueType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._retinueType = values["retinue_type"];
    }
    
    get retinueType(): RetinueTypes.Entry | undefined {
      const collection = <RetinueTypes.Entry[]>this.collectionCache.getCollection(RetinueTypes.KEY, RetinueTypes.Entry);
      return collection.find(entry => entry.type === this._retinueType);
    }
  }
}

export default RetinueTemplates;
