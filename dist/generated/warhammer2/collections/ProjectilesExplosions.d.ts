import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectilesDetonatorTypesEnum } from "./ProjectilesDetonatorTypesEnum";
import { ProjectilesDetonationTypesEnum } from "./ProjectilesDetonationTypesEnum";
import { ProjectileShrapnels } from "./ProjectileShrapnels";
import { ParticleEffects } from "./ParticleEffects";
import { AudioExplosions } from "./AudioExplosions";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { BattleCameraShakeParameters } from "./BattleCameraShakeParameters";
export declare namespace ProjectilesExplosions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _detonatorType: string;
        readonly _detonationType: string;
        readonly detonationRadius: number;
        readonly detonationDuration: number;
        readonly detonationSpeed: number;
        readonly detonationDamage: number;
        readonly _shrapnel: string;
        readonly _explosionParticleEffect: string;
        readonly fuseDistanceFromTarget: number;
        readonly _explosionParticleEffectOnGround: string;
        readonly _explosionAudio: string;
        readonly _contactPhaseEffect: string;
        readonly ignitionAmount: number;
        readonly isMagical: boolean;
        readonly detonationDamageAp: number;
        readonly _cameraShake: string;
        readonly detonationForce: number;
        readonly fuseFixedTime: number;
        readonly affectsAllies: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly detonatorType: ProjectilesDetonatorTypesEnum.Entry | undefined;
        readonly detonationType: ProjectilesDetonationTypesEnum.Entry | undefined;
        readonly shrapnel: ProjectileShrapnels.Entry | undefined;
        readonly explosionParticleEffect: ParticleEffects.Entry | undefined;
        readonly explosionParticleEffectOnGround: ParticleEffects.Entry | undefined;
        readonly explosionAudio: AudioExplosions.Entry | undefined;
        readonly contactPhaseEffect: SpecialAbilityPhases.Entry | undefined;
        readonly cameraShake: BattleCameraShakeParameters.Entry | undefined;
    }
}
export default ProjectilesExplosions;
