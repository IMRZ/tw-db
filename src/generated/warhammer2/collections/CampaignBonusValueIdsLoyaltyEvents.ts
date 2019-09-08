
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignBonusValueIdsLoyaltyEvents {
  export const KEY = new CollectionKey("campaign_bonus_value_ids_loyalty_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly notes: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this.notes = values["notes"];
    }
    
  }
}

export default CampaignBonusValueIdsLoyaltyEvents;
