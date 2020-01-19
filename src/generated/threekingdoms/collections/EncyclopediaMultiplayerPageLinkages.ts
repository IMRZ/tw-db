
import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaMultiplayerPages } from "./EncyclopediaMultiplayerPages";

export namespace EncyclopediaMultiplayerPageLinkages {
  export const KEY = new CollectionKey("encyclopedia_multiplayer_page_linkages");

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
    
    get pageKey(): EncyclopediaMultiplayerPages.Entry | undefined {
      const collection = <EncyclopediaMultiplayerPages.Entry[]>this.collectionCache.getCollection(EncyclopediaMultiplayerPages.KEY, EncyclopediaMultiplayerPages.Entry);
      return collection.find(entry => entry.pageKey === this._pageKey);
    }
    
    get parentKey(): EncyclopediaMultiplayerPages.Entry | undefined {
      const collection = <EncyclopediaMultiplayerPages.Entry[]>this.collectionCache.getCollection(EncyclopediaMultiplayerPages.KEY, EncyclopediaMultiplayerPages.Entry);
      return collection.find(entry => entry.pageKey === this._parentKey);
    }
    
    get nextKey(): EncyclopediaMultiplayerPages.Entry | undefined {
      const collection = <EncyclopediaMultiplayerPages.Entry[]>this.collectionCache.getCollection(EncyclopediaMultiplayerPages.KEY, EncyclopediaMultiplayerPages.Entry);
      return collection.find(entry => entry.pageKey === this._nextKey);
    }
  }
}

export default EncyclopediaMultiplayerPageLinkages;
