import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ParticleEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ParticleEffects;
