import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
export declare namespace UiEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _bannerFx: string;
        readonly _pingFx: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly bannerFx: ParticleEffects.Entry | undefined;
        readonly pingFx: ParticleEffects.Entry | undefined;
    }
}
export default UiEffects;
