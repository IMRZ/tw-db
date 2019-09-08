
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignSettlementDisplayBuildingModelIds } from "./CampaignSettlementDisplayBuildingModelIds";

export namespace CampaignSettlementDisplayBuildingsOverlays {
  export const KEY = new CollectionKey("campaign_settlement_display_buildings_overlays");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _modelId: string;
    readonly prefabType: string;
    readonly overlayBmd: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._modelId = values["model_id"];
      this.prefabType = values["prefab_type"];
      this.overlayBmd = values["overlay_bmd"];
    }
    
    get modelId(): CampaignSettlementDisplayBuildingModelIds.Entry | undefined {
      const collection = <CampaignSettlementDisplayBuildingModelIds.Entry[]>this.collectionCache.getCollection(CampaignSettlementDisplayBuildingModelIds.KEY, CampaignSettlementDisplayBuildingModelIds.Entry);
      return collection.find(entry => entry.id === this._modelId);
    }
  }
}

export default CampaignSettlementDisplayBuildingsOverlays;
