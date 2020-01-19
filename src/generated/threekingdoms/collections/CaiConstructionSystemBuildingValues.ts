
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Cultures } from "./Cultures";
import { BuildingLevels } from "./BuildingLevels";
import { BuildingInstances } from "./BuildingInstances";
import { BuildingChains } from "./BuildingChains";
import { BuildingSuperchains } from "./BuildingSuperchains";
import { CaiConstructionSystemCategories } from "./CaiConstructionSystemCategories";
import { CaiConstructionSystemCategoryGroups } from "./CaiConstructionSystemCategoryGroups";

export namespace CaiConstructionSystemBuildingValues {
  export const KEY = new CollectionKey("cai_construction_system_building_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaign: string;
    readonly _faction: string;
    readonly _subCulture: string;
    readonly _culture: string;
    readonly _buildingOrBuildingRangeStartInclusive: string;
    readonly _buildingRangeEndInclusive: string;
    readonly _buildingInstance: string;
    readonly _buildingChain: string;
    readonly _buildingSuperChain: string;
    readonly _caiConstructionSystemCategory: string;
    readonly _caiConstructionSystemCategoryGroup: string;
    readonly scoreOrScoreStartInclusive: number;
    readonly scoreEndInclusive: number;
    readonly perProvinceBuildingLimitStart: number;
    readonly perProvinceBuildingMinimumDiscountWhenExceedingLimitStart: number;
    readonly perProvinceBuildingMaximumDiscountWhenExceedingLimitStart: number;
    readonly perProvincePerBuildingDiscountIncrementWhenExceedingLimitStart: number;
    readonly perProvinceBuildingLimitEnd: number;
    readonly perProvinceBuildingMinimumDiscountWhenExceedingLimitEnd: number;
    readonly perProvinceBuildingMaximumDiscountWhenExceedingLimitEnd: number;
    readonly perProvincePerBuildingDiscountIncrementWhenExceedingLimitEnd: number;
    readonly perFactionBuildingLimitStart: number;
    readonly perFactionBuildingMinimumDiscountWhenExceedingLimitStart: number;
    readonly perFactionBuildingMaximumDiscountWhenExceedingLimitStart: number;
    readonly perFactionPerBuildingDiscountIncrementWhenExceedingLimitStart: number;
    readonly perFactionBuildingLimitEnd: number;
    readonly perFactionBuildingMinimumDiscountWhenExceedingLimitEnd: number;
    readonly perFactionBuildingMaximumDiscountWhenExceedingLimitEnd: number;
    readonly perFactionPerBuildingDiscountIncrementWhenExceedingLimitEnd: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaign = values["campaign"];
      this._faction = values["faction"];
      this._subCulture = values["sub_culture"];
      this._culture = values["culture"];
      this._buildingOrBuildingRangeStartInclusive = values["building_or_building_range_start_inclusive"];
      this._buildingRangeEndInclusive = values["building_range_end_inclusive"];
      this._buildingInstance = values["building_instance"];
      this._buildingChain = values["building_chain"];
      this._buildingSuperChain = values["building_super_chain"];
      this._caiConstructionSystemCategory = values["cai_construction_system_category"];
      this._caiConstructionSystemCategoryGroup = values["cai_construction_system_category_group"];
      this.scoreOrScoreStartInclusive = values["score_or_score_start_inclusive"];
      this.scoreEndInclusive = values["score_end_inclusive"];
      this.perProvinceBuildingLimitStart = values["per_province_building_limit_start"];
      this.perProvinceBuildingMinimumDiscountWhenExceedingLimitStart = values["per_province_building_minimum_discount_when_exceeding_limit_start"];
      this.perProvinceBuildingMaximumDiscountWhenExceedingLimitStart = values["per_province_building_maximum_discount_when_exceeding_limit_start"];
      this.perProvincePerBuildingDiscountIncrementWhenExceedingLimitStart = values["per_province_per_building_discount_increment_when_exceeding_limit_start"];
      this.perProvinceBuildingLimitEnd = values["per_province_building_limit_end"];
      this.perProvinceBuildingMinimumDiscountWhenExceedingLimitEnd = values["per_province_building_minimum_discount_when_exceeding_limit_end"];
      this.perProvinceBuildingMaximumDiscountWhenExceedingLimitEnd = values["per_province_building_maximum_discount_when_exceeding_limit_end"];
      this.perProvincePerBuildingDiscountIncrementWhenExceedingLimitEnd = values["per_province_per_building_discount_increment_when_exceeding_limit_end"];
      this.perFactionBuildingLimitStart = values["per_faction_building_limit_start"];
      this.perFactionBuildingMinimumDiscountWhenExceedingLimitStart = values["per_faction_building_minimum_discount_when_exceeding_limit_start"];
      this.perFactionBuildingMaximumDiscountWhenExceedingLimitStart = values["per_faction_building_maximum_discount_when_exceeding_limit_start"];
      this.perFactionPerBuildingDiscountIncrementWhenExceedingLimitStart = values["per_faction_per_building_discount_increment_when_exceeding_limit_start"];
      this.perFactionBuildingLimitEnd = values["per_faction_building_limit_end"];
      this.perFactionBuildingMinimumDiscountWhenExceedingLimitEnd = values["per_faction_building_minimum_discount_when_exceeding_limit_end"];
      this.perFactionBuildingMaximumDiscountWhenExceedingLimitEnd = values["per_faction_building_maximum_discount_when_exceeding_limit_end"];
      this.perFactionPerBuildingDiscountIncrementWhenExceedingLimitEnd = values["per_faction_per_building_discount_increment_when_exceeding_limit_end"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get subCulture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subCulture);
    }
    
    get culture(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culture);
    }
    
    get buildingOrBuildingRangeStartInclusive(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingOrBuildingRangeStartInclusive);
    }
    
    get buildingRangeEndInclusive(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingRangeEndInclusive);
    }
    
    get buildingInstance(): BuildingInstances.Entry | undefined {
      const collection = <BuildingInstances.Entry[]>this.collectionCache.getCollection(BuildingInstances.KEY, BuildingInstances.Entry);
      return collection.find(entry => entry.key === this._buildingInstance);
    }
    
    get buildingChain(): BuildingChains.Entry | undefined {
      const collection = <BuildingChains.Entry[]>this.collectionCache.getCollection(BuildingChains.KEY, BuildingChains.Entry);
      return collection.find(entry => entry.key === this._buildingChain);
    }
    
    get buildingSuperChain(): BuildingSuperchains.Entry | undefined {
      const collection = <BuildingSuperchains.Entry[]>this.collectionCache.getCollection(BuildingSuperchains.KEY, BuildingSuperchains.Entry);
      return collection.find(entry => entry.key === this._buildingSuperChain);
    }
    
    get caiConstructionSystemCategory(): CaiConstructionSystemCategories.Entry | undefined {
      const collection = <CaiConstructionSystemCategories.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemCategories.KEY, CaiConstructionSystemCategories.Entry);
      return collection.find(entry => entry.key === this._caiConstructionSystemCategory);
    }
    
    get caiConstructionSystemCategoryGroup(): CaiConstructionSystemCategoryGroups.Entry | undefined {
      const collection = <CaiConstructionSystemCategoryGroups.Entry[]>this.collectionCache.getCollection(CaiConstructionSystemCategoryGroups.KEY, CaiConstructionSystemCategoryGroups.Entry);
      return collection.find(entry => entry.key === this._caiConstructionSystemCategoryGroup);
    }
  }
}

export default CaiConstructionSystemBuildingValues;
