
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";

export namespace SettlementSiegeActionEffectCosts {
  export const KEY = new CollectionKey("settlement_siege_action_effect_costs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectGroup: string;
    readonly treasuryCostIncreasePercentageFromAverageUnitHealth: number;
    readonly treasuryCostReductionPercentagePerUnit: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectGroup = values["effect_group"];
      this.treasuryCostIncreasePercentageFromAverageUnitHealth = values["treasury_cost_increase_percentage_from_average_unit_health"];
      this.treasuryCostReductionPercentagePerUnit = values["treasury_cost_reduction_percentage_per_unit"];
    }
    
    get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined {
      const collection = <SettlementSiegeActionEffectGroups.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectGroups.KEY, SettlementSiegeActionEffectGroups.Entry);
      return collection.find(entry => entry.effectGroup === this._effectGroup);
    }
  }
}

export default SettlementSiegeActionEffectCosts;
