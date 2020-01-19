import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
export declare namespace SpecialAbilityDisplays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly saDisplayKey: string;
        readonly _windUpWeaponVfx: string;
        readonly _windUpAuraVfx: string;
        constructor(collectionCache: CollectionCache, values: any);
        get windUpWeaponVfx(): ParticleEffects.Entry | undefined;
        get windUpAuraVfx(): ParticleEffects.Entry | undefined;
    }
}
export default SpecialAbilityDisplays;
