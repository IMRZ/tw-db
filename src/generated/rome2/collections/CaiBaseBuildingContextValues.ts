
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";

export namespace CaiBaseBuildingContextValues {
  export const KEY = new CollectionKey("cai_base_building_context_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingKey: string;
    readonly economicValue: number;
    readonly militaryValue: number;
    readonly happinessValue: number;
    readonly prestigeValue: number;
    readonly educationValue: number;
    readonly existingBuildingsApplyDiscountOverLimit: number;
    readonly existingBuildingsDiscountPerBuilding: number;
    readonly existingBuildingsMaximumDiscount: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingKey = values["building_key"];
      this.economicValue = values["economic_value"];
      this.militaryValue = values["military_value"];
      this.happinessValue = values["happiness_value"];
      this.prestigeValue = values["prestige_value"];
      this.educationValue = values["education_value"];
      this.existingBuildingsApplyDiscountOverLimit = values["existing_buildings_apply_discount_over_limit"];
      this.existingBuildingsDiscountPerBuilding = values["existing_buildings_discount_per_building"];
      this.existingBuildingsMaximumDiscount = values["existing_buildings_maximum_discount"];
    }
    
    get buildingKey(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingKey);
    }
  }
}

export default CaiBaseBuildingContextValues;
