
import { CollectionCache, CollectionKey } from "../../../common";
import { SettlementSiegeActionEffectGroups } from "./SettlementSiegeActionEffectGroups";

export namespace SettlementSiegeActionEffectLootAndDamageBuildings {
  export const KEY = new CollectionKey("settlement_siege_action_effect_loot_and_damage_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectGroup: string;
    readonly baseLootValue: number;
    readonly buildingDamagePercentage: number;
    readonly buildingDamageSpreadPercentage: number;
    readonly buildingLootModifierPercentage: number;
    readonly totalLootModifierPercentage: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectGroup = values["effect_group"];
      this.baseLootValue = values["base_loot_value"];
      this.buildingDamagePercentage = values["building_damage_percentage"];
      this.buildingDamageSpreadPercentage = values["building_damage_spread_percentage"];
      this.buildingLootModifierPercentage = values["building_loot_modifier_percentage"];
      this.totalLootModifierPercentage = values["total_loot_modifier_percentage"];
    }
    
    get effectGroup(): SettlementSiegeActionEffectGroups.Entry | undefined {
      const collection = <SettlementSiegeActionEffectGroups.Entry[]>this.collectionCache.getCollection(SettlementSiegeActionEffectGroups.KEY, SettlementSiegeActionEffectGroups.Entry);
      return collection.find(entry => entry.effectGroup === this._effectGroup);
    }
  }
}

export default SettlementSiegeActionEffectLootAndDamageBuildings;
