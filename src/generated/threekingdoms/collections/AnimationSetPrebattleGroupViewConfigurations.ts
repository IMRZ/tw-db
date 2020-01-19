
import { CollectionCache, CollectionKey } from "../../../common";
import { AnimationSetPrebattleGroups } from "./AnimationSetPrebattleGroups";

export namespace AnimationSetPrebattleGroupViewConfigurations {
  export const KEY = new CollectionKey("animation_set_prebattle_group_view_configurations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _attacker: string;
    readonly _defender: string;
    readonly separation: number;
    readonly cameraDistance: number;
    readonly cameraHeight: number;
    readonly scale: number;
    readonly targetHeight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._attacker = values["attacker"];
      this._defender = values["defender"];
      this.separation = values["separation"];
      this.cameraDistance = values["camera_distance"];
      this.cameraHeight = values["camera_height"];
      this.scale = values["scale"];
      this.targetHeight = values["target_height"];
    }
    
    get attacker(): AnimationSetPrebattleGroups.Entry | undefined {
      const collection = <AnimationSetPrebattleGroups.Entry[]>this.collectionCache.getCollection(AnimationSetPrebattleGroups.KEY, AnimationSetPrebattleGroups.Entry);
      return collection.find(entry => entry.key === this._attacker);
    }
    
    get defender(): AnimationSetPrebattleGroups.Entry | undefined {
      const collection = <AnimationSetPrebattleGroups.Entry[]>this.collectionCache.getCollection(AnimationSetPrebattleGroups.KEY, AnimationSetPrebattleGroups.Entry);
      return collection.find(entry => entry.key === this._defender);
    }
  }
}

export default AnimationSetPrebattleGroupViewConfigurations;
