import { CollectionCache, CollectionKey } from "../../../common";
import { ParticleEffects } from "./ParticleEffects";
import { ProjectileImpacts } from "./ProjectileImpacts";
import { BattleCameraShakeParameters } from "./BattleCameraShakeParameters";
export declare namespace ProjectileDisplays {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly displayModel: string;
        readonly _launchFx: string;
        readonly _trailFx: string;
        readonly _stationaryFx: string;
        readonly _impact: string;
        readonly airborneAnim: string;
        readonly landingAnim: string;
        readonly tipOffset: number;
        readonly trailSpin: boolean;
        readonly _launchCameraShake: string;
        readonly _impactBounce: string;
        readonly _impactPenetrate: string;
        readonly _impactBlood: string;
        readonly _impactBounceBlood: string;
        readonly _impactPenetrateBlood: string;
        readonly displayModelBlood: string;
        readonly _trailFxBlood: string;
        constructor(collectionCache: CollectionCache, values: any);
        get launchFx(): ParticleEffects.Entry | undefined;
        get trailFx(): ParticleEffects.Entry | undefined;
        get stationaryFx(): ParticleEffects.Entry | undefined;
        get impact(): ProjectileImpacts.Entry | undefined;
        get launchCameraShake(): BattleCameraShakeParameters.Entry | undefined;
        get impactBounce(): ProjectileImpacts.Entry | undefined;
        get impactPenetrate(): ProjectileImpacts.Entry | undefined;
        get impactBlood(): ProjectileImpacts.Entry | undefined;
        get impactBounceBlood(): ProjectileImpacts.Entry | undefined;
        get impactPenetrateBlood(): ProjectileImpacts.Entry | undefined;
        get trailFxBlood(): ParticleEffects.Entry | undefined;
    }
}
export default ProjectileDisplays;
