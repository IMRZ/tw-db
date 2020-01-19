
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyAutomaticDealParticipants {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_deal_participants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignDiplomacyAutomaticDealParticipants;
