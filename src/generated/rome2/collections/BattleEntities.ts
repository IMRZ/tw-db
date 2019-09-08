
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleEntitiesTypesEnum } from "./BattleEntitiesTypesEnum";

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
    readonly crawlSpeed: number;
    readonly chargeDistanceCommenceRun: number;
    readonly chargeDistanceAdoptChargePose: number;
    readonly chargeDistancePickTarget: number;
    readonly radius: number;
    readonly _shape: any;
    readonly radiiRatio: number;
    readonly mass: number;
    readonly height: number;
    readonly fireArcClose: number;
    readonly fireArcLoose: number;
    readonly turnSpeed: number;
    readonly hitPoints: number;
    readonly allowTurnToMoveAnim: boolean;
    readonly allowStaticTurnAnim: boolean;
    readonly trackingThreshold: number;
    readonly minTurningSpeed: number;
    readonly displayModelOffsetZ: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._type = values["type"];
      this.walkSpeed = values["walk_speed"];
      this.runSpeed = values["run_speed"];
      this.acceleration = values["acceleration"];
      this.deceleration = values["deceleration"];
      this.chargeSpeed = values["charge_speed"];
      this.crawlSpeed = values["crawl_speed"];
      this.chargeDistanceCommenceRun = values["charge_distance_commence_run"];
      this.chargeDistanceAdoptChargePose = values["charge_distance_adopt_charge_pose"];
      this.chargeDistancePickTarget = values["charge_distance_pick_target"];
      this.radius = values["radius"];
      this._shape = values["shape"];
      this.radiiRatio = values["radii_ratio"];
      this.mass = values["mass"];
      this.height = values["height"];
      this.fireArcClose = values["fire_arc_close"];
      this.fireArcLoose = values["fire_arc_loose"];
      this.turnSpeed = values["turn_speed"];
      this.hitPoints = values["hit_points"];
      this.allowTurnToMoveAnim = !!values["allow_turn_to_move_anim"];
      this.allowStaticTurnAnim = !!values["allow_static_turn_anim"];
      this.trackingThreshold = values["tracking_threshold"];
      this.minTurningSpeed = values["min_turning_speed"];
      this.displayModelOffsetZ = values["display_model_offset_z"];
    }
    
    get type(): BattleEntitiesTypesEnum.Entry | undefined {
      const collection = <BattleEntitiesTypesEnum.Entry[]>this.collectionCache.getCollection(BattleEntitiesTypesEnum.KEY, BattleEntitiesTypesEnum.Entry);
      return collection.find(entry => entry.key === this._type);
    }
  }
}

export default BattleEntities;
