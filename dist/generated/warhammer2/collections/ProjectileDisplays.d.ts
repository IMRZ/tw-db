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
        constructor(collectionCache: CollectionCache, values: any);
        readonly launchFx: ParticleEffects.Entry | undefined;
        readonly trailFx: ParticleEffects.Entry | undefined;
        readonly stationaryFx: ParticleEffects.Entry | undefined;
        readonly impact: ProjectileImpacts.Entry | undefined;
        readonly launchCameraShake: BattleCameraShakeParameters.Entry | undefined;
        readonly impactBounce: ProjectileImpacts.Entry | undefined;
        readonly impactPenetrate: ProjectileImpacts.Entry | undefined;
        readonly impactBlood: ProjectileImpacts.Entry | undefined;
        readonly impactBounceBlood: ProjectileImpacts.Entry | undefined;
        readonly impactPenetrateBlood: ProjectileImpacts.Entry | undefined;
    }
}
export default ProjectileDisplays;
