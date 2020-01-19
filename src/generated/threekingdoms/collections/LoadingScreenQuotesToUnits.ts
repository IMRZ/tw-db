
import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenQuotes } from "./LoadingScreenQuotes";
import { MainUnits } from "./MainUnits";

export namespace LoadingScreenQuotesToUnits {
  export const KEY = new CollectionKey("loading_screen_quotes_to_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _quote: string;
    readonly _unit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._quote = values["quote"];
      this._unit = values["unit"];
    }
    
    get quote(): LoadingScreenQuotes.Entry | undefined {
      const collection = <LoadingScreenQuotes.Entry[]>this.collectionCache.getCollection(LoadingScreenQuotes.KEY, LoadingScreenQuotes.Entry);
      return collection.find(entry => entry.key === this._quote);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default LoadingScreenQuotesToUnits;
