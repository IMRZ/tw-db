import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalityNegotiationComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly initialDecline: number;
        readonly initialCounter: number;
        readonly irrelevantDecline: number;
        readonly irrelevantAccept: number;
        readonly irrelevantCounterNew: number;
        readonly irrelevantCounterLast: number;
        readonly angryRejectMin: number;
        readonly angryRejectMax: number;
        readonly noPaymentChance: number;
        readonly maxStepsAboveAcceptable: number;
        readonly noOfferChance: number;
        readonly numGoalsGenerated: number;
        readonly maxInteractions: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityNegotiationComponents;
