
import { CollectionCache, CollectionKey } from "../../../common";
import { LoyaltyFactors } from "./LoyaltyFactors";

export namespace LoyaltyEventEffects {
  export const KEY = new CollectionKey("loyalty_event_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly event: string;
    readonly _loyaltyFactor: string;
    readonly percentageChance: number;
    readonly loyaltyChange: number;
    readonly threshold: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.event = values["event"];
      this._loyaltyFactor = values["loyalty_factor"];
      this.percentageChance = values["percentage_chance"];
      this.loyaltyChange = values["loyalty_change"];
      this.threshold = values["threshold"];
    }
    
    get loyaltyFactor(): LoyaltyFactors.Entry | undefined {
      const collection = <LoyaltyFactors.Entry[]>this.collectionCache.getCollection(LoyaltyFactors.KEY, LoyaltyFactors.Entry);
      return collection.find(entry => entry.key === this._loyaltyFactor);
    }
  }
}

export default LoyaltyEventEffects;
