
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { CampaignSettlementDisplayBuildingModelIds } from "./CampaignSettlementDisplayBuildingModelIds";

export namespace CampaignSettlementDisplayBuildingIds {
  export const KEY = new CollectionKey("campaign_settlement_display_building_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _buildingLevelKey: string;
    readonly _subCulture: string;
    readonly _buildingModelId: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._buildingLevelKey = values["building_level_key"];
      this._subCulture = values["sub_culture"];
      this._buildingModelId = values["building_model_id"];
    }
    
    get buildingLevelKey(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevelKey);
    }
    
    get subCulture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subCulture);
    }
    
    get buildingModelId(): CampaignSettlementDisplayBuildingModelIds.Entry | undefined {
      const collection = <CampaignSettlementDisplayBuildingModelIds.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplayBuildingModelIds.KEY, CampaignSettlementDisplayBuildingModelIds.Entry);
      return collection.find(entry => entry.id === this._buildingModelId);
    }
  }
}

export default CampaignSettlementDisplayBuildingIds;
