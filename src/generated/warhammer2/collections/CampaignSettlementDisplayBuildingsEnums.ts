
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignSettlementDisplayBuildingsEnums {
  export const KEY = new CollectionKey("campaign_settlement_display_buildings_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default CampaignSettlementDisplayBuildingsEnums;
