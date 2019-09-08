import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalityDealEvaluationComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly maxPaymentValue: number;
        readonly paymentTreacheryValue: number;
        readonly paymentOfferedMultiplier: number;
        readonly paymentRequestedMultiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityDealEvaluationComponents;
