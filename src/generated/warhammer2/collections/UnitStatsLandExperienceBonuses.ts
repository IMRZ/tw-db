
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitStatsLandExperienceBonuses {
  export const KEY = new CollectionKey("unit_stats_land_experience_bonuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly xpLevel: number;
    readonly fatigue: number;
    readonly mpFixedCost: number;
    readonly mpExperienceCostMultiplier: number;
    readonly additionalMeleeCp: number;
    readonly additionalMissileCp: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.xpLevel = values["xp_level"];
      this.fatigue = values["fatigue"];
      this.mpFixedCost = values["mp_fixed_cost"];
      this.mpExperienceCostMultiplier = values["mp_experience_cost_multiplier"];
      this.additionalMeleeCp = values["additional_melee_cp"];
      this.additionalMissileCp = values["additional_missile_cp"];
    }
    
  }
}

export default UnitStatsLandExperienceBonuses;
