
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignSettlementDisplayBuildings } from "./CampaignSettlementDisplayBuildings";

export namespace CampaignGroupSettlementBuildingModels {
  export const KEY = new CollectionKey("campaign_group_settlement_building_models");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _buildingModel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._buildingModel = values["building_model"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get buildingModel(): CampaignSettlementDisplayBuildings.Entry | undefined {
      const collection = <CampaignSettlementDisplayBuildings.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplayBuildings.KEY, CampaignSettlementDisplayBuildings.Entry);
      return collection.find(entry => entry._modelId === this._buildingModel);
    }
  }
}

export default CampaignGroupSettlementBuildingModels;
