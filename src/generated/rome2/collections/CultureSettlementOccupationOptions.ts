
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";

export namespace CultureSettlementOccupationOptions {
  export const KEY = new CollectionKey("culture_settlement_occupation_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _culture: string;
    readonly option: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._culture = values["culture"];
      this.option = values["option"];
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
  }
}

export default CultureSettlementOccupationOptions;
