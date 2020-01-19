
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntitiesTypesEnum } from "./BattleEntitiesTypesEnum";
import { BattleEntitiesSizeEnums } from "./BattleEntitiesSizeEnums";
import { BattleEntitiesGradientStrategyEnums } from "./BattleEntitiesGradientStrategyEnums";
import { AudioEntityTypes } from "./AudioEntityTypes";
import { BattleEntityEffectsJunctions } from "./BattleEntityEffectsJunctions";
import { UnitPortholeCameraSettings } from "./UnitPortholeCameraSettings";
import { BattleCameraShakeParameters } from "./BattleCameraShakeParameters";

export namespace BattleEntities {
  export const KEY = new CollectionKey("battle_entities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _type: string;
    readonly walkSpeed: number;
    readonly runSpeed: number;
    readonly acceleration: number;
    readonly deceleration: number;
    readonly chargeSpeed: number;
    readonly strafeSpeed: number;
    readonly chargeDistanceCommenceRun: number;
    readonly chargeDistanceAdoptChargePose: number;
    readonly chargeDistancePickTarget: number;
    readonly radius: number;
    readonly _shape: any;
    readonly radiiRatio: number;
    readonly mass: number;
    readonly height: number;
    readonly fireArcClose: number;
    readonly turnSpeed: number;
    readonly allowTurnToMoveAnim: boolean;
    readonly allowStaticTurnAnim: boolean;
    readonly minTurningSpeed: number;
    readonly flySpeed: number;
    readonly flyingChargeSpeed: number;
    readonly _size: string;
    readonly _gradientStrategy: string;
    readonly _audioEntityType: string;
    readonly combatReactionRadius: number;
    readonly _entityEffects: string;
    readonly hitReactionsIgnoreChance: number;
    readonly knockInterruptsIgnoreChance: number;
    readonly softCollisionOffsetZ: number;
    readonly canClimbLadderAndStairPipes: boolean;
    readonly projectileIntersectionRadiusRatio: number;
    readonly projectilePenetrationResistance: number;
    readonly projectilePenetrationSpeedChange: number;
    readonly auraVfx: string;
    readonly _portholeCamera: string;
    readonly minTrackingRatio: number;
    readonly maxTrackingRatio: number;
    readonly vfxFilterId: number;
    readonly canCastProjectile: boolean;
    readonly portholeCompositeScene: string;
    readonly _combatCameraShake: string;
    readonly hasBlood: boolean;
    readonly canDismember: boolean;
    readonly dismemberArmsAliveHpRatio: number;
    readonly dismemberHeadAliveHpRatio: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._type = values["type"];
      this.walkSpeed = values["walk_speed"];
      this.runSpeed = values["run_speed"];
      this.acceleration = values["acceleration"];
      this.deceleration = values["deceleration"];
      this.chargeSpeed = values["charge_speed"];
      this.strafeSpeed = values["strafe_speed"];
      this.chargeDistanceCommenceRun = values["charge_distance_commence_run"];
      this.chargeDistanceAdoptChargePose = values["charge_distance_adopt_charge_pose"];
      this.chargeDistancePickTarget = values["charge_distance_pick_target"];
      this.radius = values["radius"];
      this._shape = values["shape"];
      this.radiiRatio = values["radii_ratio"];
      this.mass = values["mass"];
      this.height = values["height"];
      this.fireArcClose = values["fire_arc_close"];
      this.turnSpeed = values["turn_speed"];
      this.allowTurnToMoveAnim = !!values["allow_turn_to_move_anim"];
      this.allowStaticTurnAnim = !!values["allow_static_turn_anim"];
      this.minTurningSpeed = values["min_turning_speed"];
      this.flySpeed = values["fly_speed"];
      this.flyingChargeSpeed = values["flying_charge_speed"];
      this._size = values["size"];
      this._gradientStrategy = values["gradient_strategy"];
      this._audioEntityType = values["audio_entity_type"];
      this.combatReactionRadius = values["combat_reaction_radius"];
      this._entityEffects = values["entity_effects"];
      this.hitReactionsIgnoreChance = values["hit_reactions_ignore_chance"];
      this.knockInterruptsIgnoreChance = values["knock_interrupts_ignore_chance"];
      this.softCollisionOffsetZ = values["soft_collision_offset_z"];
      this.canClimbLadderAndStairPipes = !!values["can_climb_ladder_and_stair_pipes"];
      this.projectileIntersectionRadiusRatio = values["projectile_intersection_radius_ratio"];
      this.projectilePenetrationResistance = values["projectile_penetration_resistance"];
      this.projectilePenetrationSpeedChange = values["projectile_penetration_speed_change"];
      this.auraVfx = values["aura_vfx"];
      this._portholeCamera = values["porthole_camera"];
      this.minTrackingRatio = values["min_tracking_ratio"];
      this.maxTrackingRatio = values["max_tracking_ratio"];
      this.vfxFilterId = values["vfx_filter_id"];
      this.canCastProjectile = !!values["can_cast_projectile"];
      this.portholeCompositeScene = values["porthole_composite_scene"];
      this._combatCameraShake = values["combat_camera_shake"];
      this.hasBlood = !!values["has_blood"];
      this.canDismember = !!values["can_dismember"];
      this.dismemberArmsAliveHpRatio = values["dismember_arms_alive_hp_ratio"];
      this.dismemberHeadAliveHpRatio = values["dismember_head_alive_hp_ratio"];
    }
    
    get type(): BattleEntitiesTypesEnum.Entry | undefined {
      const collection = <BattleEntitiesTypesEnum.Entry[]>this.collectionCache.getCollection(BattleEntitiesTypesEnum.KEY, BattleEntitiesTypesEnum.Entry);
      return collection.find(entry => entry.key === this._type);
    }
    
    get size(): BattleEntitiesSizeEnums.Entry | undefined {
      const collection = <BattleEntitiesSizeEnums.Entry[]>this.collectionCache.getCollection(BattleEntitiesSizeEnums.KEY, BattleEntitiesSizeEnums.Entry);
      return collection.find(entry => entry.key === this._size);
    }
    
    get gradientStrategy(): BattleEntitiesGradientStrategyEnums.Entry | undefined {
      const collection = <BattleEntitiesGradientStrategyEnums.Entry[]>this.collectionCache.getCollection(BattleEntitiesGradientStrategyEnums.KEY, BattleEntitiesGradientStrategyEnums.Entry);
      return collection.find(entry => entry.key === this._gradientStrategy);
    }
    
    get audioEntityType(): AudioEntityTypes.Entry | undefined {
      const collection = <AudioEntityTypes.Entry[]>this.collectionCache.getCollection(AudioEntityTypes.KEY, AudioEntityTypes.Entry);
      return collection.find(entry => entry.key === this._audioEntityType);
    }
    
    get entityEffects(): BattleEntityEffectsJunctions.Entry | undefined {
      const collection = <BattleEntityEffectsJunctions.Entry[]>this.collectionCache.getCollection(BattleEntityEffectsJunctions.KEY, BattleEntityEffectsJunctions.Entry);
      return collection.find(entry => entry.key === this._entityEffects);
    }
    
    get portholeCamera(): UnitPortholeCameraSettings.Entry | undefined {
      const collection = <UnitPortholeCameraSettings.Entry[]>this.collectionCache.getCollection(UnitPortholeCameraSettings.KEY, UnitPortholeCameraSettings.Entry);
      return collection.find(entry => entry.key === this._portholeCamera);
    }
    
    get combatCameraShake(): BattleCameraShakeParameters.Entry | undefined {
      const collection = <BattleCameraShakeParameters.Entry[]>this.collectionCache.getCollection(BattleCameraShakeParameters.KEY, BattleCameraShakeParameters.Entry);
      return collection.find(entry => entry.key === this._combatCameraShake);
    }
  }
}

export default BattleEntities;
