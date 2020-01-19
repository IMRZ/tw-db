
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignSettlementDisplaySettlementLayoutIds {
  export const KEY = new CollectionKey("campaign_settlement_display_settlement_layout_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly layout: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.layout = values["layout"];
    }
    
  }
}

export default CampaignSettlementDisplaySettlementLayoutIds;
