
import { CollectionCache, CollectionKey } from "../../../common";


export namespace QuotesPeople {
  export const KEY = new CollectionKey("quotes_people");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly quotePersonKey: string;
    readonly quotePersonOnscreen: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.quotePersonKey = values["quote_person_key"];
      this.quotePersonOnscreen = values["quote_person_onscreen"];
    }
    
  }
}

export default QuotesPeople;
