import { CollectionCache, CollectionKey } from "../../../common";
import { LoyaltyFactors } from "./LoyaltyFactors";
export declare namespace LoyaltyEventEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly event: string;
        readonly _loyaltyFactor: string;
        readonly percentageChance: number;
        readonly loyaltyChange: number;
        readonly threshold: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly loyaltyFactor: LoyaltyFactors.Entry | undefined;
    }
}
export default LoyaltyEventEffects;
