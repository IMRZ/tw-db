import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalityNegotiationComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly noPaymentChance: number;
        readonly noOfferChance: number;
        readonly maxInteractions: number;
        readonly noOfferChanceFalloff: number;
        readonly numGoalsGenerated: number;
        readonly minimumWaitBetweenOffersToPlayer: number;
        readonly noOfferChanceFalloffGlobal: number;
        readonly noOfferChanceGlobal: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityNegotiationComponents;
