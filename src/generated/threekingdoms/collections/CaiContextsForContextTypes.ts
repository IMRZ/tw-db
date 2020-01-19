
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiContextTypes } from "./CaiContextTypes";

export namespace CaiContextsForContextTypes {
  export const KEY = new CollectionKey("cai_contexts_for_context_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly contextKey: string;
    readonly _contextTypeKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.contextKey = values["context_key"];
      this._contextTypeKey = values["context_type_key"];
    }
    
    get contextTypeKey(): CaiContextTypes.Entry | undefined {
      const collection = <CaiContextTypes.Entry[]>this.collectionCache.getCollection(CaiContextTypes.KEY, CaiContextTypes.Entry);
      return collection.find(entry => entry.contextTypeKey === this._contextTypeKey);
    }
  }
}

export default CaiContextsForContextTypes;
