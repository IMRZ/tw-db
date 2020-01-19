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
        get shotType(): ProjectileShotTypeEnum.Entry | undefined;
        get explosionType(): ProjectilesExplosions.Entry | undefined;
        get projectileDisplay(): ProjectileDisplays.Entry | undefined;
        get overheadStatEffect(): SpecialAbilityPhases.Entry | undefined;
        get contactStatEffect(): SpecialAbilityPhases.Entry | undefined;
        get projectileAudio(): AudioProjectiles.Entry | undefined;
    }
}
export default Projectiles;
