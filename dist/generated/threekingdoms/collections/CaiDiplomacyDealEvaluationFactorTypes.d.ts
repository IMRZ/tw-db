import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiDiplomacyDealEvaluationFactorTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiDiplomacyDealEvaluationFactorTypes;
