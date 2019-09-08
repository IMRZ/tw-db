
import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaPages } from "./EncyclopediaPages";

export namespace EncyclopediaBlocks {
  export const KEY = new CollectionKey("encyclopedia_blocks");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly blockKey: string;
    readonly _pageKey: string;
    readonly order: number;
    readonly heading: string;
    readonly class: string;
    readonly content: string;
    readonly image: string;
    readonly imageClass: string;
    readonly video: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.blockKey = values["block_key"];
      this._pageKey = values["page_key"];
      this.order = values["order"];
      this.heading = values["heading"];
      this.class = values["class"];
      this.content = values["content"];
      this.image = values["image"];
      this.imageClass = values["image_class"];
      this.video = values["video"];
    }
    
    get pageKey(): EncyclopediaPages.Entry | undefined {
      const collection = <EncyclopediaPages.Entry[]>this.collectionCache.getCollection(EncyclopediaPages.KEY, EncyclopediaPages.Entry);
      return collection.find(entry => entry.pageKey === this._pageKey);
    }
  }
}

export default EncyclopediaBlocks;
