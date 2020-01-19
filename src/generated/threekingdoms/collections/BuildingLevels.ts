
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChains } from "./BuildingChains";
import { Commodities } from "./Commodities";
import { Religions } from "./Religions";
import { EffectBundles } from "./EffectBundles";
import { Resources } from "./Resources";
import { BuildingInstances } from "./BuildingInstances";
import { AudioCampaignBuildings } from "./AudioCampaignBuildings";
import { BuildingLevelsSettlementUiDisplays } from "./BuildingLevelsSettlementUiDisplays";

export namespace BuildingLevels {
  export const KEY = new CollectionKey("building_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly levelName: string;
    readonly _chain: string;
    readonly level: number;
    readonly onlyInCapital: boolean;
    readonly createTime: number;
    readonly createCost: number;
    readonly upkeepCost: number;
    readonly _commodity: string;
    readonly commodityVol: number;
    readonly militaryPrestige: number;
    readonly navalPrestige: number;
    readonly economicPrestige: number;
    readonly enlightenmentPrestige: number;
    readonly factionUnique: boolean;
    readonly _religionRequirement: string;
    readonly _firstInWorldBundle: string;
    readonly _resourceRequirement: string;
    readonly canConvert: boolean;
    readonly _buildingInstanceKey: string;
    readonly _audioBuildingType: string;
    readonly shouldShowBuildingLevelInUiForTechnology: boolean;
    readonly healthOverride: number;
    readonly developmentPointCost: number;
    readonly canBeDamaged: boolean;
    readonly primarySlotBuildingBuildingLevelRequirement: number;
    readonly visibleInUi: boolean;
    readonly costToConstructInstantly: number;
    readonly settlementSecondarySlotUnlockPoints: number;
    readonly _settlementUiDisplay: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.levelName = values["level_name"];
      this._chain = values["chain"];
      this.level = values["level"];
      this.onlyInCapital = !!values["only_in_capital"];
      this.createTime = values["create_time"];
      this.createCost = values["create_cost"];
      this.upkeepCost = values["upkeep_cost"];
      this._commodity = values["commodity"];
      this.commodityVol = values["commodity_vol"];
      this.militaryPrestige = values["military_prestige"];
      this.navalPrestige = values["naval_prestige"];
      this.economicPrestige = values["economic_prestige"];
      this.enlightenmentPrestige = values["enlightenment_prestige"];
      this.factionUnique = !!values["faction_unique"];
      this._religionRequirement = values["religion_requirement"];
      this._firstInWorldBundle = values["first_in_world_bundle"];
      this._resourceRequirement = values["resource_requirement"];
      this.canConvert = !!values["can_convert"];
      this._buildingInstanceKey = values["building_instance_key"];
      this._audioBuildingType = values["audio_building_type"];
      this.shouldShowBuildingLevelInUiForTechnology = !!values["should_show_building_level_in_ui_for_technology"];
      this.healthOverride = values["health_override"];
      this.developmentPointCost = values["development_point_cost"];
      this.canBeDamaged = !!values["can_be_damaged"];
      this.primarySlotBuildingBuildingLevelRequirement = values["primary_slot_building_building_level_requirement"];
      this.visibleInUi = !!values["visible_in_ui"];
      this.costToConstructInstantly = values["cost_to_construct_instantly"];
      this.settlementSecondarySlotUnlockPoints = values["settlement_secondary_slot_unlock_points"];
      this._settlementUiDisplay = values["settlement_ui_display"];
    }
    
    get chain(): BuildingChains.Entry | undefined {
      const collection = <BuildingChains.Entry[]>this.collectionCache.getCollection(BuildingChains.KEY, BuildingChains.Entry);
      return collection.find(entry => entry.key === this._chain);
    }
    
    get commodity(): Commodities.Entry | undefined {
      const collection = <Commodities.Entry[]>this.collectionCache.getCollection(Commodities.KEY, Commodities.Entry);
      return collection.find(entry => entry._key === this._commodity);
    }
    
    get religionRequirement(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religionRequirement);
    }
    
    get firstInWorldBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._firstInWorldBundle);
    }
    
    get resourceRequirement(): Resources.Entry | undefined {
      const collection = <Resources.Entry[]>this.collectionCache.getCollection(Resources.KEY, Resources.Entry);
      return collection.find(entry => entry.key === this._resourceRequirement);
    }
    
    get buildingInstanceKey(): BuildingInstances.Entry | undefined {
      const collection = <BuildingInstances.Entry[]>this.collectionCache.getCollection(BuildingInstances.KEY, BuildingInstances.Entry);
      return collection.find(entry => entry.key === this._buildingInstanceKey);
    }
    
    get audioBuildingType(): AudioCampaignBuildings.Entry | undefined {
      const collection = <AudioCampaignBuildings.Entry[]>this.collectionCache.getCollection(AudioCampaignBuildings.KEY, AudioCampaignBuildings.Entry);
      return collection.find(entry => entry.key === this._audioBuildingType);
    }
    
    get settlementUiDisplay(): BuildingLevelsSettlementUiDisplays.Entry | undefined {
      const collection = <BuildingLevelsSettlementUiDisplays.Entry[]>this.collectionCache.getCollection(BuildingLevelsSettlementUiDisplays.KEY, BuildingLevelsSettlementUiDisplays.Entry);
      return collection.find(entry => entry.key === this._settlementUiDisplay);
    }
  }
}

export default BuildingLevels;
