
import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaGlossaryPages } from "./EncyclopediaGlossaryPages";

export namespace EncyclopediaGlossaryPageLinkages {
  export const KEY = new CollectionKey("encyclopedia_glossary_page_linkages");

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
    
    get pageKey(): EncyclopediaGlossaryPages.Entry | undefined {
      const collection = <EncyclopediaGlossaryPages.Entry[]>this.collectionCache.getCollection(EncyclopediaGlossaryPages.KEY, EncyclopediaGlossaryPages.Entry);
      return collection.find(entry => entry.pageKey === this._pageKey);
    }
    
    get parentKey(): EncyclopediaGlossaryPages.Entry | undefined {
      const collection = <EncyclopediaGlossaryPages.Entry[]>this.collectionCache.getCollection(EncyclopediaGlossaryPages.KEY, EncyclopediaGlossaryPages.Entry);
      return collection.find(entry => entry.pageKey === this._parentKey);
    }
    
    get nextKey(): EncyclopediaGlossaryPages.Entry | undefined {
      const collection = <EncyclopediaGlossaryPages.Entry[]>this.collectionCache.getCollection(EncyclopediaGlossaryPages.KEY, EncyclopediaGlossaryPages.Entry);
      return collection.find(entry => entry.pageKey === this._nextKey);
    }
  }
}

export default EncyclopediaGlossaryPageLinkages;
