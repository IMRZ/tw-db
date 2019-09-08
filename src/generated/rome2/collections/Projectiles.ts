
import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectileShotTypeEnum } from "./ProjectileShotTypeEnum";
import { ProjectilesExplosions } from "./ProjectilesExplosions";
import { ProjectileDisplays } from "./ProjectileDisplays";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { AudioProjectiles } from "./AudioProjectiles";

export namespace Projectiles {
  export const KEY = new CollectionKey("projectiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._category = values["category"];
      this._shotType = values["shot_type"];
      this._explosionType = values["explosion_type"];
      this.highAirResistance = !!values["high_air_resistance"];
      this.spinType = values["spin_type"];
      this.projectileNumber = values["projectile_number"];
      this._trajectorySight = values["trajectory_sight"];
      this.effectiveRange = values["effective_range"];
      this.minimumRange = values["minimum_range"];
      this.maxElevation = values["max_elevation"];
      this.muzzleVelocity = values["muzzle_velocity"];
      this.marksmanshipBonus = values["marksmanship_bonus"];
      this.spread = values["spread"];
      this.damage = values["damage"];
      this.apDamage = values["ap_damage"];
      this._penetration = values["penetration"];
      this._incendiary = values["incendiary"];
      this.canBounce = !!values["can_bounce"];
      this.collisionRadius = values["collision_radius"];
      this.baseReloadTime = values["base_reload_time"];
      this.belowWaterlineDamageModifer = values["below_waterline_damage_modifer"];
      this.calibrationDistance = values["calibration_distance"];
      this.calibrationArea = values["calibration_area"];
      this.bonusVInfantry = values["bonus_v_infantry"];
      this.bonusVCavalry = values["bonus_v_cavalry"];
      this.bonusVElephant = values["bonus_v_elephant"];
      this._projectileDisplay = values["projectile_display"];
      this._overheadStatEffect = values["overhead_stat_effect"];
      this._contactStatEffect = values["contact_stat_effect"];
      this._projectileAudio = values["projectile_audio"];
      this.shockwaveRadius = values["shockwave_radius"];
      this.canDamageBuildings = !!values["can_damage_buildings"];
      this.isGrapple = !!values["is_grapple"];
    }
    
    get shotType(): ProjectileShotTypeEnum.Entry | undefined {
      const collection = <ProjectileShotTypeEnum.Entry[]>this.collectionCache.getCollection(ProjectileShotTypeEnum.KEY, ProjectileShotTypeEnum.Entry);
      return collection.find(entry => entry.key === this._shotType);
    }
    
    get explosionType(): ProjectilesExplosions.Entry | undefined {
      const collection = <ProjectilesExplosions.Entry[]>this.collectionCache.getCollection(ProjectilesExplosions.KEY, ProjectilesExplosions.Entry);
      return collection.find(entry => entry.key === this._explosionType);
    }
    
    get projectileDisplay(): ProjectileDisplays.Entry | undefined {
      const collection = <ProjectileDisplays.Entry[]>this.collectionCache.getCollection(ProjectileDisplays.KEY, ProjectileDisplays.Entry);
      return collection.find(entry => entry.key === this._projectileDisplay);
    }
    
    get overheadStatEffect(): SpecialAbilityPhases.Entry | undefined {
      const collection = <SpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhases.KEY, SpecialAbilityPhases.Entry);
      return collection.find(entry => entry.id === this._overheadStatEffect);
    }
    
    get contactStatEffect(): SpecialAbilityPhases.Entry | undefined {
      const collection = <SpecialAbilityPhases.Entry[]>this.collectionCache.getCollection(SpecialAbilityPhases.KEY, SpecialAbilityPhases.Entry);
      return collection.find(entry => entry.id === this._contactStatEffect);
    }
    
    get projectileAudio(): AudioProjectiles.Entry | undefined {
      const collection = <AudioProjectiles.Entry[]>this.collectionCache.getCollection(AudioProjectiles.KEY, AudioProjectiles.Entry);
      return collection.find(entry => entry.key === this._projectileAudio);
    }
  }
}

export default Projectiles;
