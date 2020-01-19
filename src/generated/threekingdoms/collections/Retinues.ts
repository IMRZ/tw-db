
import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueTemplates } from "./RetinueTemplates";

export namespace Retinues {
  export const KEY = new CollectionKey("retinues");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _template: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._template = values["template"];
    }
    
    get template(): RetinueTemplates.Entry | undefined {
      const collection = <RetinueTemplates.Entry[]>this.collectionCache.getCollection(RetinueTemplates.KEY, RetinueTemplates.Entry);
      return collection.find(entry => entry.key === this._template);
    }
  }
}

export default Retinues;
