
import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaPages } from "./EncyclopediaPages";

export namespace EncyclopediaPageRelatedLinks {
  export const KEY = new CollectionKey("encyclopedia_page_related_links");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _pageKey: string;
    readonly _target: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._pageKey = values["page_key"];
      this._target = values["target"];
    }
    
    get pageKey(): EncyclopediaPages.Entry | undefined {
      const collection = <EncyclopediaPages.Entry[]>this.collectionCache.getCollection(EncyclopediaPages.KEY, EncyclopediaPages.Entry);
      return collection.find(entry => entry.pageKey === this._pageKey);
    }
    
    get target(): EncyclopediaPages.Entry | undefined {
      const collection = <EncyclopediaPages.Entry[]>this.collectionCache.getCollection(EncyclopediaPages.KEY, EncyclopediaPages.Entry);
      return collection.find(entry => entry.pageKey === this._target);
    }
  }
}

export default EncyclopediaPageRelatedLinks;
