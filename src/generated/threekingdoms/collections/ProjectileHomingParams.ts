
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectileHomingParams {
  export const KEY = new CollectionKey("projectile_homing_params");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly startTime: number;
    readonly maxTargetAngleDelta: number;
    readonly lookaheadTime: number;
    readonly steeringCoefficient: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.startTime = values["start_time"];
      this.maxTargetAngleDelta = values["max_target_angle_delta"];
      this.lookaheadTime = values["lookahead_time"];
      this.steeringCoefficient = values["steering_coefficient"];
    }
    
  }
}

export default ProjectileHomingParams;
