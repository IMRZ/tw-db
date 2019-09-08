
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TradeDetails {
  export const KEY = new CollectionKey("trade_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenText: string;
    readonly iconFilepath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenText = values["onscreen_text"];
      this.iconFilepath = values["icon_filepath"];
    }
    
  }
}

export default TradeDetails;
