
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignSettlementDisplayBuildingConstructionEnums {
  export const KEY = new CollectionKey("campaign_settlement_display_building_construction_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default CampaignSettlementDisplayBuildingConstructionEnums;
