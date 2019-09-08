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
        readonly bloodSpurtLargeDecal: string;
        readonly _bloodExplosionDecal: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly walkDust: BattleEntityEffects.Entry | undefined;
        readonly runDust: BattleEntityEffects.Entry | undefined;
        readonly impactDust: BattleEntityEffects.Entry | undefined;
        readonly meleeDust: BattleEntityEffects.Entry | undefined;
        readonly footsteps: BattleEntityEffects.Entry | undefined;
        readonly bloodSpurtSmall: ParticleEffects.Entry | undefined;
        readonly bloodSpurtMedium: ParticleEffects.Entry | undefined;
        readonly bloodSpurtLarge: ParticleEffects.Entry | undefined;
        readonly bloodExplosion: ParticleEffects.Entry | undefined;
        readonly bloodExplosionDecal: ParticleEffects.Entry | undefined;
    }
}
export default BattleEntityEffectsJunctions;
