
import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaBlocks } from "./EncyclopediaBlocks";

export namespace EncyclopediaIndexPages {
  export const KEY = new CollectionKey("encyclopedia_index_pages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly pageKey: string;
    readonly _annotation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.pageKey = values["page_key"];
      this._annotation = values["annotation"];
    }
    
    get annotation(): EncyclopediaBlocks.Entry | undefined {
      const collection = <EncyclopediaBlocks.Entry[]>this.collectionCache.getCollection(EncyclopediaBlocks.KEY, EncyclopediaBlocks.Entry);
      return collection.find(entry => entry.blockKey === this._annotation);
    }
  }
}

export default EncyclopediaIndexPages;
