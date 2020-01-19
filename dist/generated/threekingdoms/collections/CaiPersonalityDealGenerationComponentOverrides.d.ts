import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalityDealGenerationComponents } from "./CaiPersonalityDealGenerationComponents";
export declare namespace CaiPersonalityDealGenerationComponentOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _component: string;
        readonly _parent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get component(): CaiPersonalityDealGenerationComponents.Entry | undefined;
        get parent(): CaiPersonalityDealGenerationComponents.Entry | undefined;
    }
}
export default CaiPersonalityDealGenerationComponentOverrides;
