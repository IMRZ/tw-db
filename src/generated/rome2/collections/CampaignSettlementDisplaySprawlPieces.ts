
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignSettlementDisplaySprawlPieces {
  export const KEY = new CollectionKey("campaign_settlement_display_sprawl_pieces");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignSettlementDisplaySprawlPieces;
