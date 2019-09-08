
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitStatsLandExperienceBonuses {
  export const KEY = new CollectionKey("unit_stats_land_experience_bonuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly xpLevel: number;
    readonly meleeAttack: number;
    readonly meleeDefence: number;
    readonly coreReloadingSkill: number;
    readonly morale: number;
    readonly coreMarksmanship: number;
    readonly fatigue: number;
    readonly mpFixedCost: number;
    readonly mpExperienceCostMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.xpLevel = values["xp_level"];
      this.meleeAttack = values["melee_attack"];
      this.meleeDefence = values["melee_defence"];
      this.coreReloadingSkill = values["core_reloading_skill"];
      this.morale = values["morale"];
      this.coreMarksmanship = values["core_marksmanship"];
      this.fatigue = values["fatigue"];
      this.mpFixedCost = values["mp_fixed_cost"];
      this.mpExperienceCostMultiplier = values["mp_experience_cost_multiplier"];
    }
    
  }
}

export default UnitStatsLandExperienceBonuses;
