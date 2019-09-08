import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealGenerationComponents } from "./CaiPersonalityDealGenerationComponents";
export declare namespace CaiPersonalityDealGenerationComponentOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly _parent: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly component: CaiPersonalityDealGenerationComponents.Entry | undefined;
        readonly parent: CaiPersonalityDealGenerationComponents.Entry | undefined;
    }
}
export default CaiPersonalityDealGenerationComponentOverrides;
