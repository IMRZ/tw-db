import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
import { BattleCameraShakeParameters } from "./BattleCameraShakeParameters";
export declare namespace BattleEntityEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly _forest: string;
        readonly _grass: string;
        readonly _mud: string;
        readonly _sand: string;
        readonly _scrub: string;
        readonly _rock: string;
        readonly _deepWater: string;
        readonly _shallowWater: string;
        readonly _road: string;
        readonly _woodenFloor: string;
        readonly _snow: string;
        readonly effectFrequency: number;
        readonly _footstepCameraShake: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly forest: ParticleEffects.Entry | undefined;
        readonly grass: ParticleEffects.Entry | undefined;
        readonly mud: ParticleEffects.Entry | undefined;
        readonly sand: ParticleEffects.Entry | undefined;
        readonly scrub: ParticleEffects.Entry | undefined;
        readonly rock: ParticleEffects.Entry | undefined;
        readonly deepWater: ParticleEffects.Entry | undefined;
        readonly shallowWater: ParticleEffects.Entry | undefined;
        readonly road: ParticleEffects.Entry | undefined;
        readonly woodenFloor: ParticleEffects.Entry | undefined;
        readonly snow: ParticleEffects.Entry | undefined;
        readonly footstepCameraShake: BattleCameraShakeParameters.Entry | undefined;
    }
}
export default BattleEntityEffects;
