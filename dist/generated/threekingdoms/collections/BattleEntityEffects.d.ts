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
        get forest(): ParticleEffects.Entry | undefined;
        get grass(): ParticleEffects.Entry | undefined;
        get mud(): ParticleEffects.Entry | undefined;
        get sand(): ParticleEffects.Entry | undefined;
        get scrub(): ParticleEffects.Entry | undefined;
        get rock(): ParticleEffects.Entry | undefined;
        get deepWater(): ParticleEffects.Entry | undefined;
        get shallowWater(): ParticleEffects.Entry | undefined;
        get road(): ParticleEffects.Entry | undefined;
        get woodenFloor(): ParticleEffects.Entry | undefined;
        get snow(): ParticleEffects.Entry | undefined;
        get footstepCameraShake(): BattleCameraShakeParameters.Entry | undefined;
    }
}
export default BattleEntityEffects;
