
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitStatsNavalExperienceBonuses {
  export const KEY = new CollectionKey("unit_stats_naval_experience_bonuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly xpLevel: number;
    readonly meleeDefence: number;
    readonly meleeAttack: number;
    readonly coreGunnerLoadingSkill: number;
    readonly coreGunnerMarksmanship: number;
    readonly morale: number;
    readonly mpFixedCost: number;
    readonly mpExperienceCostMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.xpLevel = values["xp_level"];
      this.meleeDefence = values["melee_defence"];
      this.meleeAttack = values["melee_attack"];
      this.coreGunnerLoadingSkill = values["core_gunner_loading_skill"];
      this.coreGunnerMarksmanship = values["core_gunner_marksmanship"];
      this.morale = values["morale"];
      this.mpFixedCost = values["mp_fixed_cost"];
      this.mpExperienceCostMultiplier = values["mp_experience_cost_multiplier"];
    }
    
  }
}

export default UnitStatsNavalExperienceBonuses;
