
import { CollectionCache, CollectionKey } from "../../../common";
import { LoyaltyFactors } from "./LoyaltyFactors";

export namespace LoyaltyEffects {
  export const KEY = new CollectionKey("loyalty_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _factor: string;
    readonly value: number;
    readonly appliesToAi: boolean;
    readonly duration: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._factor = values["factor"];
      this.value = values["value"];
      this.appliesToAi = !!values["applies_to_ai"];
      this.duration = values["duration"];
    }
    
    get factor(): LoyaltyFactors.Entry | undefined {
      const collection = <LoyaltyFactors.Entry[]>this.collectionCache.getCollection(LoyaltyFactors.KEY, LoyaltyFactors.Entry);
      return collection.find(entry => entry.key === this._factor);
    }
  }
}

export default LoyaltyEffects;
