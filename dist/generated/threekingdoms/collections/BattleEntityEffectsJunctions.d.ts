import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntityEffects } from "./BattleEntityEffects";
import { ParticleEffects } from "./ParticleEffects";
export declare namespace BattleEntityEffectsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _walkDust: string;
        readonly _runDust: string;
        readonly _impactDust: string;
        readonly _meleeDust: string;
        readonly _footsteps: string;
        readonly _bloodSpurtSmall: string;
        readonly _bloodSpurtMedium: string;
        readonly _bloodSpurtLarge: string;
        readonly _bloodExplosion: string;
        readonly _bloodSpurtLargeDecal: string;
        readonly _bloodExplosionDecal: string;
        readonly _bloodSpurtLimb: string;
        constructor(collectionCache: CollectionCache, values: any);
        get walkDust(): BattleEntityEffects.Entry | undefined;
        get runDust(): BattleEntityEffects.Entry | undefined;
        get impactDust(): BattleEntityEffects.Entry | undefined;
        get meleeDust(): BattleEntityEffects.Entry | undefined;
        get footsteps(): BattleEntityEffects.Entry | undefined;
        get bloodSpurtSmall(): ParticleEffects.Entry | undefined;
        get bloodSpurtMedium(): ParticleEffects.Entry | undefined;
        get bloodSpurtLarge(): ParticleEffects.Entry | undefined;
        get bloodExplosion(): ParticleEffects.Entry | undefined;
        get bloodSpurtLargeDecal(): ParticleEffects.Entry | undefined;
        get bloodExplosionDecal(): ParticleEffects.Entry | undefined;
        get bloodSpurtLimb(): ParticleEffects.Entry | undefined;
    }
}
export default BattleEntityEffectsJunctions;
