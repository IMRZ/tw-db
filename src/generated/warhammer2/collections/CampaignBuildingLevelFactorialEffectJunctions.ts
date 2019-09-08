
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { FactorialEffects } from "./FactorialEffects";
import { CampaignFactorialScopes } from "./CampaignFactorialScopes";

export namespace CampaignBuildingLevelFactorialEffectJunctions {
  export const KEY = new CollectionKey("campaign_building_level_factorial_effect_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: number;
    readonly _buildingLevel: string;
    readonly _factorialEffect: string;
    readonly value: number;
    readonly _scope: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._buildingLevel = values["building_level"];
      this._factorialEffect = values["factorial_effect"];
      this.value = values["value"];
      this._scope = values["scope"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get factorialEffect(): FactorialEffects.Entry | undefined {
      const collection = <FactorialEffects.Entry[]>this.collectionCache.getCollection(FactorialEffects.KEY, FactorialEffects.Entry);
      return collection.find(entry => entry.key === this._factorialEffect);
    }
    
    get scope(): CampaignFactorialScopes.Entry | undefined {
      const collection = <CampaignFactorialScopes.Entry[]>this.collectionCache.getCollection(CampaignFactorialScopes.KEY, CampaignFactorialScopes.Entry);
      return collection.find(entry => entry.key === this._scope);
    }
  }
}

export default CampaignBuildingLevelFactorialEffectJunctions;
