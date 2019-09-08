
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingChains } from "./BuildingChains";
import { Commodities } from "./Commodities";
import { Religions } from "./Religions";
import { EffectBundles } from "./EffectBundles";
import { Resources } from "./Resources";
import { WarscapeRigid } from "./WarscapeRigid";
import { BuildingInstances } from "./BuildingInstances";
import { AudioCampaignBuildingEnums } from "./AudioCampaignBuildingEnums";

export namespace BuildingLevels {
  export const KEY = new CollectionKey("building_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly levelName: string;
    readonly _chain: string;
    readonly level: number;
    readonly condition: string;
    readonly onlyInCapital: boolean;
    readonly createTime: number;
    readonly createCost: number;
    readonly upkeepCost: number;
    readonly demolitionCost: number;
    readonly zoc: number;
    readonly lowerHappiness: number;
    readonly upperHappiness: number;
    readonly repression: number;
    readonly gdp: number;
    readonly townWealthGrowth: number;
    readonly popChange: number;
    readonly maxpopChange: number;
    readonly _commodity: string;
    readonly commodityVol: number;
    readonly _buildingCategory: any;
    readonly _govTypeKey: any;
    readonly militaryPrestige: number;
    readonly navalPrestige: number;
    readonly economicPrestige: number;
    readonly enlightenmentPrestige: number;
    readonly destructionTerminator: boolean;
    readonly factionUnique: boolean;
    readonly _religionRequirement: string;
    readonly _firstInWorldBundle: string;
    readonly _resourceRequirement: string;
    readonly _workingModel: string;
    readonly uniqueIndex: number;
    readonly canConvert: boolean;
    readonly _buildingInstanceKey: string;
    readonly _audioBuildingType: string;
    readonly shouldShowBuildingLevelInUiForTechnology: boolean;
    readonly isNew: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.levelName = values["level_name"];
      this._chain = values["chain"];
      this.level = values["level"];
      this.condition = values["condition"];
      this.onlyInCapital = !!values["only_in_capital"];
      this.createTime = values["create_time"];
      this.createCost = values["create_cost"];
      this.upkeepCost = values["upkeep_cost"];
      this.demolitionCost = values["demolition_cost"];
      this.zoc = values["zoc"];
      this.lowerHappiness = values["lower_happiness"];
      this.upperHappiness = values["upper_happiness"];
      this.repression = values["repression"];
      this.gdp = values["gdp"];
      this.townWealthGrowth = values["town_wealth_growth"];
      this.popChange = values["pop_change"];
      this.maxpopChange = values["maxpop_change"];
      this._commodity = values["commodity"];
      this.commodityVol = values["commodity_vol"];
      this._buildingCategory = values["building_category"];
      this._govTypeKey = values["gov_type_key"];
      this.militaryPrestige = values["military_prestige"];
      this.navalPrestige = values["naval_prestige"];
      this.economicPrestige = values["economic_prestige"];
      this.enlightenmentPrestige = values["enlightenment_prestige"];
      this.destructionTerminator = !!values["destruction_terminator"];
      this.factionUnique = !!values["faction_unique"];
      this._religionRequirement = values["religion_requirement"];
      this._firstInWorldBundle = values["first_in_world_bundle"];
      this._resourceRequirement = values["resource_requirement"];
      this._workingModel = values["working_model"];
      this.uniqueIndex = values["unique_index"];
      this.canConvert = !!values["can_convert"];
      this._buildingInstanceKey = values["building_instance_key"];
      this._audioBuildingType = values["audio_building_type"];
      this.shouldShowBuildingLevelInUiForTechnology = !!values["should_show_building_level_in_ui_for_technology"];
      this.isNew = !!values["is_new"];
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
    
    get workingModel(): WarscapeRigid.Entry | undefined {
      const collection = <WarscapeRigid.Entry[]>this.collectionCache.getCollection(WarscapeRigid.KEY, WarscapeRigid.Entry);
      return collection.find(entry => entry.key === this._workingModel);
    }
    
    get buildingInstanceKey(): BuildingInstances.Entry | undefined {
      const collection = <BuildingInstances.Entry[]>this.collectionCache.getCollection(BuildingInstances.KEY, BuildingInstances.Entry);
      return collection.find(entry => entry.key === this._buildingInstanceKey);
    }
    
    get audioBuildingType(): AudioCampaignBuildingEnums.Entry | undefined {
      const collection = <AudioCampaignBuildingEnums.Entry[]>this.collectionCache.getCollection(AudioCampaignBuildingEnums.KEY, AudioCampaignBuildingEnums.Entry);
      return collection.find(entry => entry.key === this._audioBuildingType);
    }
  }
}

export default BuildingLevels;
