
import { CollectionCache, CollectionKey } from "../../../common";
import { EncyclopediaHistoricalInfoPages } from "./EncyclopediaHistoricalInfoPages";

export namespace EncyclopediaHistoricalInfoBlocks {
  export const KEY = new CollectionKey("encyclopedia_historical_info_blocks");

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
    
    get pageKey(): EncyclopediaHistoricalInfoPages.Entry | undefined {
      const collection = <EncyclopediaHistoricalInfoPages.Entry[]>this.collectionCache.getCollection(EncyclopediaHistoricalInfoPages.KEY, EncyclopediaHistoricalInfoPages.Entry);
      return collection.find(entry => entry.pageKey === this._pageKey);
    }
  }
}

export default EncyclopediaHistoricalInfoBlocks;
