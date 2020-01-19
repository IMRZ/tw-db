import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealEvaluationComponents } from "./CaiPersonalityDealEvaluationComponents";
export declare namespace CaiPersonalityDealEvaluationComponentOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly _parent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CaiPersonalityDealEvaluationComponents.Entry | undefined;
        get parent(): CaiPersonalityDealEvaluationComponents.Entry | undefined;
    }
}
export default CaiPersonalityDealEvaluationComponentOverrides;
