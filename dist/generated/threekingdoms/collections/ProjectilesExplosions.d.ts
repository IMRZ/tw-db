import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectilesDetonatorTypesEnum } from "./ProjectilesDetonatorTypesEnum";
import { ProjectilesDetonationTypesEnum } from "./ProjectilesDetonationTypesEnum";
import { Projectiles } from "./Projectiles";
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
        readonly affectsAllies: boolean;
        readonly fuseFixedTime: number;
        readonly groundSpread: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get detonatorType(): ProjectilesDetonatorTypesEnum.Entry | undefined;
        get detonationType(): ProjectilesDetonationTypesEnum.Entry | undefined;
        get shrapnel(): Projectiles.Entry | undefined;
        get explosionParticleEffect(): ParticleEffects.Entry | undefined;
        get explosionParticleEffectOnGround(): ParticleEffects.Entry | undefined;
        get explosionAudio(): AudioExplosions.Entry | undefined;
        get contactPhaseEffect(): SpecialAbilityPhases.Entry | undefined;
        get cameraShake(): BattleCameraShakeParameters.Entry | undefined;
    }
}
export default ProjectilesExplosions;
