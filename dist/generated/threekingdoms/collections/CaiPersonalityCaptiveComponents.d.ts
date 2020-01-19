import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiPersonalityCaptiveComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly biasKill: number;
        readonly biasEnslave: number;
        readonly biasRelease: number;
        readonly espionageTargetMinRegionsAbs: number;
        readonly espionageTargetMinRegionsRel: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiPersonalityCaptiveComponents;
