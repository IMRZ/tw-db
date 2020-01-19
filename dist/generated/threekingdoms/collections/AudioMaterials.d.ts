import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioMaterials {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly switch: string;
        readonly canBeSnow: boolean;
        readonly _fallback: string;
        constructor(collectionCache: CollectionCache, values: any);
        get fallback(): AudioMaterials.Entry | undefined;
    }
}
export default AudioMaterials;
