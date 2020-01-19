
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplayBuildingModelIds } from "./CampaignSettlementDisplayBuildingModelIds";

export namespace CampaignSettlementDisplayBuildings {
  export const KEY = new CollectionKey("campaign_settlement_display_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _modelId: string;
    readonly buildingBmd: string;
    readonly bmdExportTypes: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._modelId = values["model_id"];
      this.buildingBmd = values["building_bmd"];
      this.bmdExportTypes = values["bmd_export_types"];
    }
    
    get modelId(): CampaignSettlementDisplayBuildingModelIds.Entry | undefined {
      const collection = <CampaignSettlementDisplayBuildingModelIds.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplayBuildingModelIds.KEY, CampaignSettlementDisplayBuildingModelIds.Entry);
      return collection.find(entry => entry.id === this._modelId);
    }
  }
}

export default CampaignSettlementDisplayBuildings;
