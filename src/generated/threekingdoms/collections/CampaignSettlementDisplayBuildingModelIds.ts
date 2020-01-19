
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignSettlementDisplayBuildingModelIds {
  export const KEY = new CollectionKey("campaign_settlement_display_building_model_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignSettlementDisplayBuildingModelIds;
