import { CollectionCache, CollectionKey } from "../../../common";
import { LoyaltyEffects } from "./LoyaltyEffects";
import { PastExperienceReasons } from "./PastExperienceReasons";
export declare namespace CaptiveOptionEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _appliedLoyaltyEffect: string;
        readonly _appliedPastExperience: string;
        constructor(collectionCache: CollectionCache, values: any);
        get appliedLoyaltyEffect(): LoyaltyEffects.Entry | undefined;
        get appliedPastExperience(): PastExperienceReasons.Entry | undefined;
    }
}
export default CaptiveOptionEffects;
