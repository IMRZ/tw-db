import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
export declare namespace SpecialAbilityPhaseDisplays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _bannerVfx: string;
        readonly _activeVfx: string;
        readonly _entityVfx: string;
        constructor(collectionCache: CollectionCache, values: any);
        get bannerVfx(): ParticleEffects.Entry | undefined;
        get activeVfx(): ParticleEffects.Entry | undefined;
        get entityVfx(): ParticleEffects.Entry | undefined;
    }
}
export default SpecialAbilityPhaseDisplays;
