import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectileShotTypeEnum } from "./ProjectileShotTypeEnum";
import { ProjectilesExplosions } from "./ProjectilesExplosions";
import { ProjectileDisplays } from "./ProjectileDisplays";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { AudioProjectiles } from "./AudioProjectiles";
export declare namespace Projectiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _category: any;
        readonly _shotType: string;
        readonly _explosionType: string;
        readonly highAirResistance: boolean;
        readonly spinType: string;
        readonly projectileNumber: number;
        readonly _trajectorySight: any;
        readonly effectiveRange: number;
        readonly minimumRange: number;
        readonly maxElevation: number;
        readonly muzzleVelocity: number;
        readonly marksmanshipBonus: number;
        readonly spread: number;
        readonly damage: number;
        readonly apDamage: number;
        readonly _penetration: any;
        readonly _incendiary: any;
        readonly canBounce: boolean;
        readonly collisionRadius: number;
        readonly baseReloadTime: number;
        readonly belowWaterlineDamageModifer: number;
        readonly calibrationDistance: number;
        readonly calibrationArea: number;
        readonly bonusVInfantry: number;
        readonly bonusVCavalry: number;
        readonly bonusVElephant: number;
        readonly _projectileDisplay: string;
        readonly _overheadStatEffect: string;
        readonly _contactStatEffect: string;
        readonly _projectileAudio: string;
        readonly shockwaveRadius: number;
        readonly canDamageBuildings: boolean;
        readonly isGrapple: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly shotType: ProjectileShotTypeEnum.Entry | undefined;
        readonly explosionType: ProjectilesExplosions.Entry | undefined;
        readonly projectileDisplay: ProjectileDisplays.Entry | undefined;
        readonly overheadStatEffect: SpecialAbilityPhases.Entry | undefined;
        readonly contactStatEffect: SpecialAbilityPhases.Entry | undefined;
        readonly projectileAudio: AudioProjectiles.Entry | undefined;
    }
}
export default Projectiles;
