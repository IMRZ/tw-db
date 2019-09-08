
import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaPages } from "./EncyclopediaPages";

export namespace EncyclopediaPageLinkages {
  export const KEY = new CollectionKey("encyclopedia_page_linkages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _pageKey: string;
    readonly _parentKey: string;
    readonly _nextKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._pageKey = values["page_key"];
      this._parentKey = values["parent_key"];
      this._nextKey = values["next_key"];
    }
    
    get pageKey(): EncyclopediaPages.Entry | undefined {
      const collection = <EncyclopediaPages.Entry[]>this.collectionCache.getCollection(EncyclopediaPages.KEY, EncyclopediaPages.Entry);
      return collection.find(entry => entry.pageKey === this._pageKey);
    }
    
    get parentKey(): EncyclopediaPages.Entry | undefined {
      const collection = <EncyclopediaPages.Entry[]>this.collectionCache.getCollection(EncyclopediaPages.KEY, EncyclopediaPages.Entry);
      return collection.find(entry => entry.pageKey === this._parentKey);
    }
    
    get nextKey(): EncyclopediaPages.Entry | undefined {
      const collection = <EncyclopediaPages.Entry[]>this.collectionCache.getCollection(EncyclopediaPages.KEY, EncyclopediaPages.Entry);
      return collection.find(entry => entry.pageKey === this._nextKey);
    }
  }
}

export default EncyclopediaPageLinkages;
