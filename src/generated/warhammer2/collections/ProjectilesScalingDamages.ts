
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ProjectilesScalingDamages {
  export const KEY = new CollectionKey("projectiles_scaling_damages");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly minDamageMultiplier: number;
    readonly maxDamageMultiplier: number;
    readonly minHealthRatio: number;
    readonly maxHealthRatio: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.minDamageMultiplier = values["min_damage_multiplier"];
      this.maxDamageMultiplier = values["max_damage_multiplier"];
      this.minHealthRatio = values["min_health_ratio"];
      this.maxHealthRatio = values["max_health_ratio"];
    }
    
  }
}

export default ProjectilesScalingDamages;
