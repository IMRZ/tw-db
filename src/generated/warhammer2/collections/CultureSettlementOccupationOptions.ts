
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { SettlementOccupationOptions } from "./SettlementOccupationOptions";
import { EffectBundles } from "./EffectBundles";

export namespace CultureSettlementOccupationOptions {
  export const KEY = new CollectionKey("culture_settlement_occupation_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _option: string;
    readonly _actingArmyFactionEffectBundle: string;
    readonly actingArmyFactionEffectBundleTurns: number;
    readonly _targetSettlementFactionEffectBundle: string;
    readonly targetSettlementFactionEffectBundleTurns: number;
    readonly _actingArmyEffectBundle: string;
    readonly actingArmyEffectBundleTurns: number;
    readonly id: number;
    readonly tooltip: string;
    readonly icon: string;
    readonly baseLoot: number;
    readonly buildingLootMod: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._option = values["option"];
      this._actingArmyFactionEffectBundle = values["acting_army_faction_effect_bundle"];
      this.actingArmyFactionEffectBundleTurns = values["acting_army_faction_effect_bundle_turns"];
      this._targetSettlementFactionEffectBundle = values["target_settlement_faction_effect_bundle"];
      this.targetSettlementFactionEffectBundleTurns = values["target_settlement_faction_effect_bundle_turns"];
      this._actingArmyEffectBundle = values["acting_army_effect_bundle"];
      this.actingArmyEffectBundleTurns = values["acting_army_effect_bundle_turns"];
      this.id = values["id"];
      this.tooltip = values["tooltip"];
      this.icon = values["icon"];
      this.baseLoot = values["base_loot"];
      this.buildingLootMod = values["building_loot_mod"];
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
    
    get option(): SettlementOccupationOptions.Entry | undefined {
      const collection = <SettlementOccupationOptions.Entry[]>this.collectionCache.getCollection(SettlementOccupationOptions.KEY, SettlementOccupationOptions.Entry);
      return collection.find(entry => entry.key === this._option);
    }
    
    get actingArmyFactionEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._actingArmyFactionEffectBundle);
    }
    
    get targetSettlementFactionEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._targetSettlementFactionEffectBundle);
    }
    
    get actingArmyEffectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._actingArmyEffectBundle);
    }
  }
}

export default CultureSettlementOccupationOptions;
