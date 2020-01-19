
import { CollectionCache, CollectionKey } from "../../../common";
import { QuotesPeople } from "./QuotesPeople";

export namespace Quotes {
  export const KEY = new CollectionKey("quotes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly quoteOnscreen: string;
    readonly _quotePerson: string;
    readonly key: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.quoteOnscreen = values["quote_onscreen"];
      this._quotePerson = values["quote_person"];
      this.key = values["key"];
    }
    
    get quotePerson(): QuotesPeople.Entry | undefined {
      const collection = <QuotesPeople.Entry[]>this.collectionCache.getCollection(QuotesPeople.KEY, QuotesPeople.Entry);
      return collection.find(entry => entry.quotePersonKey === this._quotePerson);
    }
  }
}

export default Quotes;
