import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingSuperchains } from "./BuildingSuperchains";
export declare namespace CaiConstructionSystemSuperchainHints {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _superChainKey: string;
        readonly militarySpecialisationRecommended: boolean;
        readonly economicSpecialisationRecommended: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get superChainKey(): BuildingSuperchains.Entry | undefined;
    }
}
export default CaiConstructionSystemSuperchainHints;
