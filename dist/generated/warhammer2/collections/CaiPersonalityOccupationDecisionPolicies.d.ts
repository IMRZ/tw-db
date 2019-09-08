import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalityOccupationDecisionPolicies {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly foodShortageCap: number;
        readonly foodExcessCap: number;
        readonly squalorCap: number;
        readonly minAttitude: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityOccupationDecisionPolicies;
