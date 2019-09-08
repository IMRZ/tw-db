import { CollectionCache, CollectionKey } from "../../../common";
import { LoyaltyFactors } from "./LoyaltyFactors";
export declare namespace LoyaltyEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _factor: string;
        readonly value: number;
        readonly appliesToAi: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly factor: LoyaltyFactors.Entry | undefined;
    }
}
export default LoyaltyEffects;
