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
        readonly bannerVfx: ParticleEffects.Entry | undefined;
        readonly activeVfx: ParticleEffects.Entry | undefined;
        readonly entityVfx: ParticleEffects.Entry | undefined;
    }
}
export default SpecialAbilityPhaseDisplays;
