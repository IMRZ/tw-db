
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiPersonalitiesConstructionPreferencePolicies } from "./CaiPersonalitiesConstructionPreferencePolicies";
import { BuildingLevels } from "./BuildingLevels";

export namespace CaiPersonalitiesConstructionPreferencePolicyBuildingJunctions {
  export const KEY = new CollectionKey("cai_personalities_construction_preference_policy_building_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _policyKey: string;
    readonly _buildingKey: string;
    readonly biasLevel: number;
    readonly absoluteAdjustment: number;
    readonly buildingDiscountLimitAdjustment: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._policyKey = values["policy_key"];
      this._buildingKey = values["building_key"];
      this.biasLevel = values["bias_level"];
      this.absoluteAdjustment = values["absolute_adjustment"];
      this.buildingDiscountLimitAdjustment = values["building_discount_limit_adjustment"];
    }
    
    get policyKey(): CaiPersonalitiesConstructionPreferencePolicies.Entry | undefined {
      const collection = <CaiPersonalitiesConstructionPreferencePolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesConstructionPreferencePolicies.KEY, CaiPersonalitiesConstructionPreferencePolicies.Entry);
      return collection.find(entry => entry.key === this._policyKey);
    }
    
    get buildingKey(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingKey);
    }
  }
}

export default CaiPersonalitiesConstructionPreferencePolicyBuildingJunctions;
