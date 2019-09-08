import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectilesDetonatorTypesEnum } from "./ProjectilesDetonatorTypesEnum";
import { ProjectilesDetonationTypesEnum } from "./ProjectilesDetonationTypesEnum";
import { Projectiles } from "./Projectiles";
import { ParticleEffects } from "./ParticleEffects";
import { AudioExplosionsEnums } from "./AudioExplosionsEnums";
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
        readonly _projectileName: string;
        readonly projectileAmount: number;
        readonly _explosionParticleEffect: string;
        readonly distanceFromTarget: number;
        readonly errorMargin: number;
        readonly nonLethalDetonation: boolean;
        readonly explosionParticleEffectOnGround: string;
        readonly _audioExplosionType: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly detonatorType: ProjectilesDetonatorTypesEnum.Entry | undefined;
        readonly detonationType: ProjectilesDetonationTypesEnum.Entry | undefined;
        readonly projectileName: Projectiles.Entry | undefined;
        readonly explosionParticleEffect: ParticleEffects.Entry | undefined;
        readonly audioExplosionType: AudioExplosionsEnums.Entry | undefined;
    }
}
export default ProjectilesExplosions;
