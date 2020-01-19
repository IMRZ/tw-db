
import { CollectionCache, CollectionKey } from "../../../common";
import { LoyaltyEffects } from "./LoyaltyEffects";
import { PastExperienceReasons } from "./PastExperienceReasons";

export namespace CaptiveOptionEffects {
  export const KEY = new CollectionKey("captive_option_effects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _appliedLoyaltyEffect: string;
    readonly _appliedPastExperience: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._appliedLoyaltyEffect = values["applied_loyalty_effect"];
      this._appliedPastExperience = values["applied_past_experience"];
    }
    
    get appliedLoyaltyEffect(): LoyaltyEffects.Entry | undefined {
      const collection = <LoyaltyEffects.Entry[]>this.collectionCache.getCollection(LoyaltyEffects.KEY, LoyaltyEffects.Entry);
      return collection.find(entry => entry.key === this._appliedLoyaltyEffect);
    }
    
    get appliedPastExperience(): PastExperienceReasons.Entry | undefined {
      const collection = <PastExperienceReasons.Entry[]>this.collectionCache.getCollection(PastExperienceReasons.KEY, PastExperienceReasons.Entry);
      return collection.find(entry => entry.key === this._appliedPastExperience);
    }
  }
}

export default CaptiveOptionEffects;
