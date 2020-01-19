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
        get bannerFx(): ParticleEffects.Entry | undefined;
        get pingFx(): ParticleEffects.Entry | undefined;
    }
}
export default UiEffects;
