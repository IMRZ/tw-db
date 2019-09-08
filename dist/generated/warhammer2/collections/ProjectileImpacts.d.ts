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
        readonly water: ParticleEffects.Entry | undefined;
        readonly sails: ParticleEffects.Entry | undefined;
        readonly mud: ParticleEffects.Entry | undefined;
        readonly grass: ParticleEffects.Entry | undefined;
        readonly road: ParticleEffects.Entry | undefined;
        readonly rock: ParticleEffects.Entry | undefined;
        readonly sand: ParticleEffects.Entry | undefined;
        readonly snow: ParticleEffects.Entry | undefined;
        readonly leather: ParticleEffects.Entry | undefined;
        readonly wood: ParticleEffects.Entry | undefined;
        readonly blood: ParticleEffects.Entry | undefined;
        readonly cameraShake: BattleCameraShakeParameters.Entry | undefined;
    }
}
export default ProjectileImpacts;
