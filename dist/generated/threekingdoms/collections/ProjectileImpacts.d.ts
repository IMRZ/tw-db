import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
import { BattleCameraShakeParameters } from "./BattleCameraShakeParameters";
export declare namespace ProjectileImpacts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _water: string;
        readonly _sails: string;
        readonly _mud: string;
        readonly _grass: string;
        readonly _road: string;
        readonly _rock: string;
        readonly _sand: string;
        readonly _snow: string;
        readonly _leather: string;
        readonly _wood: string;
        readonly _blood: string;
        readonly _cameraShake: string;
        constructor(collectionCache: CollectionCache, values: any);
        get water(): ParticleEffects.Entry | undefined;
        get sails(): ParticleEffects.Entry | undefined;
        get mud(): ParticleEffects.Entry | undefined;
        get grass(): ParticleEffects.Entry | undefined;
        get road(): ParticleEffects.Entry | undefined;
        get rock(): ParticleEffects.Entry | undefined;
        get sand(): ParticleEffects.Entry | undefined;
        get snow(): ParticleEffects.Entry | undefined;
        get leather(): ParticleEffects.Entry | undefined;
        get wood(): ParticleEffects.Entry | undefined;
        get blood(): ParticleEffects.Entry | undefined;
        get cameraShake(): BattleCameraShakeParameters.Entry | undefined;
    }
}
export default ProjectileImpacts;
