
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosDiplomacyDeals } from "./StartPosDiplomacyDeals";

export namespace StartPosDiplomacyDealOrderings {
  export const KEY = new CollectionKey("start_pos_diplomacy_deal_orderings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly order: number;
    readonly _deal: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.order = values["order"];
      this._deal = values["deal"];
    }
    
    get deal(): StartPosDiplomacyDeals.Entry | undefined {
      const collection = <StartPosDiplomacyDeals.Entry[]>this.collectionCache.getCollection(StartPosDiplomacyDeals.KEY, StartPosDiplomacyDeals.Entry);
      return collection.find(entry => entry.id === this._deal);
    }
  }
}

export default StartPosDiplomacyDealOrderings;
