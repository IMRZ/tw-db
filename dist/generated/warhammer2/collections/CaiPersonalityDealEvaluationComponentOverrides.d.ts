import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealEvaluationComponents } from "./CaiPersonalityDealEvaluationComponents";
export declare namespace CaiPersonalityDealEvaluationComponentOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly _parent: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly component: CaiPersonalityDealEvaluationComponents.Entry | undefined;
        readonly parent: CaiPersonalityDealEvaluationComponents.Entry | undefined;
    }
}
export default CaiPersonalityDealEvaluationComponentOverrides;
