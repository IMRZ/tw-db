
import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenQuotes } from "./LoadingScreenQuotes";
import { Cultures } from "./Cultures";

export namespace LoadingScreenQuotesToCultures {
  export const KEY = new CollectionKey("loading_screen_quotes_to_cultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _loadingQuote: string;
    readonly _culture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._loadingQuote = values["loading_quote"];
      this._culture = values["culture"];
    }
    
    get loadingQuote(): LoadingScreenQuotes.Entry | undefined {
      const collection = <LoadingScreenQuotes.Entry[]>this.collectionCache.getCollection(LoadingScreenQuotes.KEY, LoadingScreenQuotes.Entry);
      return collection.find(entry => entry.key === this._loadingQuote);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default LoadingScreenQuotesToCultures;
