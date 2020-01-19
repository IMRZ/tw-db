
import { CollectionCache, CollectionKey } from "../../../common";
import { ProjectileShotTypeEnum } from "./ProjectileShotTypeEnum";
import { ProjectilesExplosions } from "./ProjectilesExplosions";
import { ProjectilesSpinTypeEnum } from "./ProjectilesSpinTypeEnum";
import { ProjectileDisplays } from "./ProjectileDisplays";
import { SpecialAbilityPhases } from "./SpecialAbilityPhases";
import { AudioProjectiles } from "./AudioProjectiles";
import { ProjectileHomingParams } from "./ProjectileHomingParams";
import { ProjectileFirstPersonParams } from "./ProjectileFirstPersonParams";
import { ProjectilePenetrationJunctions } from "./ProjectilePenetrationJunctions";
import { TexcExpansions } from "./TexcExpansions";
import { Deployables } from "./Deployables";

export namespace Projectiles {
  export const KEY = new CollectionKey("projectiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _category: any;
    readonly _shotType: string;
    readonly _explosionType: string;
    readonly highAirResistance: boolean;
    readonly _spinType: string;
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
    readonly canBounce: boolean;
    readonly collisionRadius: number;
    readonly baseReloadTime: number;
    readonly calibrationDistance: number;
    readonly calibrationArea: number;
    readonly bonusVInfantry: number;
    readonly bonusVCavalry: number;
    readonly bonusVLarge: number;
    readonly _projectileDisplay: string;
    readonly _overheadStatEffect: string;
    readonly _contactStatEffect: string;
    readonly _projectileAudio: string;
    readonly shockwaveRadius: number;
    readonly canDamageBuildings: boolean;
    readonly isGrapple: boolean;
    readonly burstSize: number;
    readonly burstShotDelay: number;
    readonly gravity: number;
    readonly mass: number;
    readonly _homingParams: string;
    readonly _firstPersonParams: string;
    readonly ignitionAmount: number;
    readonly isMagical: boolean;
    readonly canTargetAirborne: boolean;
    readonly fixedElevation: number;
    readonly _projectilePenetration: string;
    readonly expiryRange: number;
    readonly isBeamLaunchBurst: boolean;
    readonly expireOnImpact: boolean;
    readonly canRoll: boolean;
    readonly shotsPerVolley: number;
    readonly _gameExpansionKey: string;
    readonly firedByMount: boolean;
    readonly preferCentralTargets: boolean;
    readonly canDamageVehicles: boolean;
    readonly lockOnMultipleFirePos: boolean;
    readonly _spawnDeployableOnImpact: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._category = values["category"];
      this._shotType = values["shot_type"];
      this._explosionType = values["explosion_type"];
      this.highAirResistance = !!values["high_air_resistance"];
      this._spinType = values["spin_type"];
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
      this.canBounce = !!values["can_bounce"];
      this.collisionRadius = values["collision_radius"];
      this.baseReloadTime = values["base_reload_time"];
      this.calibrationDistance = values["calibration_distance"];
      this.calibrationArea = values["calibration_area"];
      this.bonusVInfantry = values["bonus_v_infantry"];
      this.bonusVCavalry = values["bonus_v_cavalry"];
      this.bonusVLarge = values["bonus_v_large"];
      this._projectileDisplay = values["projectile_display"];
      this._overheadStatEffect = values["overhead_stat_effect"];
      this._contactStatEffect = values["contact_stat_effect"];
      this._projectileAudio = values["projectile_audio"];
      this.shockwaveRadius = values["shockwave_radius"];
      this.canDamageBuildings = !!values["can_damage_buildings"];
      this.isGrapple = !!values["is_grapple"];
      this.burstSize = values["burst_size"];
      this.burstShotDelay = values["burst_shot_delay"];
      this.gravity = values["gravity"];
      this.mass = values["mass"];
      this._homingParams = values["homing_params"];
      this._firstPersonParams = values["first_person_params"];
      this.ignitionAmount = values["ignition_amount"];
      this.isMagical = !!values["is_magical"];
      this.canTargetAirborne = !!values["can_target_airborne"];
      this.fixedElevation = values["fixed_elevation"];
      this._projectilePenetration = values["projectile_penetration"];
      this.expiryRange = values["expiry_range"];
      this.isBeamLaunchBurst = !!values["is_beam_launch_burst"];
      this.expireOnImpact = !!values["expire_on_impact"];
      this.canRoll = !!values["can_roll"];
      this.shotsPerVolley = values["shots_per_volley"];
      this._gameExpansionKey = values["game_expansion_key"];
      this.firedByMount = !!values["fired_by_mount"];
      this.preferCentralTargets = !!values["prefer_central_targets"];
      this.canDamageVehicles = !!values["can_damage_vehicles"];
      this.lockOnMultipleFirePos = !!values["lock_on_multiple_fire_pos"];
      this._spawnDeployableOnImpact = values["spawn_deployable_on_impact"];
    }
    
    get shotType(): ProjectileShotTypeEnum.Entry | undefined {
      const collection = <ProjectileShotTypeEnum.Entry[]>this.collectionCache.getCollection(ProjectileShotTypeEnum.KEY, ProjectileShotTypeEnum.Entry);
      return collection.find(entry => entry.key === this._shotType);
    }
    
    get explosionType(): ProjectilesExplosions.Entry | undefined {
      const collection = <ProjectilesExplosions.Entry[]>this.collectionCache.getCollection(ProjectilesExplosions.KEY, ProjectilesExplosions.Entry);
      return collection.find(entry => entry.key === this._explosionType);
    }
    
    get spinType(): ProjectilesSpinTypeEnum.Entry | undefined {
      const collection = <ProjectilesSpinTypeEnum.Entry[]>this.collectionCache.getCollection(ProjectilesSpinTypeEnum.KEY, ProjectilesSpinTypeEnum.Entry);
      return collection.find(entry => entry.key === this._spinType);
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
    
    get homingParams(): ProjectileHomingParams.Entry | undefined {
      const collection = <ProjectileHomingParams.Entry[]>this.collectionCache.getCollection(ProjectileHomingParams.KEY, ProjectileHomingParams.Entry);
      return collection.find(entry => entry.key === this._homingParams);
    }
    
    get firstPersonParams(): ProjectileFirstPersonParams.Entry | undefined {
      const collection = <ProjectileFirstPersonParams.Entry[]>this.collectionCache.getCollection(ProjectileFirstPersonParams.KEY, ProjectileFirstPersonParams.Entry);
      return collection.find(entry => entry.key === this._firstPersonParams);
    }
    
    get projectilePenetration(): ProjectilePenetrationJunctions.Entry | undefined {
      const collection = <ProjectilePenetrationJunctions.Entry[]>this.collectionCache.getCollection(ProjectilePenetrationJunctions.KEY, ProjectilePenetrationJunctions.Entry);
      return collection.find(entry => entry.key === this._projectilePenetration);
    }
    
    get gameExpansionKey(): TexcExpansions.Entry | undefined {
      const collection = <TexcExpansions.Entry[]>this.collectionCache.getCollection(TexcExpansions.KEY, TexcExpansions.Entry);
      return collection.find(entry => entry.expansion === this._gameExpansionKey);
    }
    
    get spawnDeployableOnImpact(): Deployables.Entry | undefined {
      const collection = <Deployables.Entry[]>this.collectionCache.getCollection(Deployables.KEY, Deployables.Entry);
      return collection.find(entry => entry.key === this._spawnDeployableOnImpact);
    }
  }
}

export default Projectiles;
