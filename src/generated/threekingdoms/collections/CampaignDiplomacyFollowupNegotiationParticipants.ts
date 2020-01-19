
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyFollowupNegotiationParticipants {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiation_participants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignDiplomacyFollowupNegotiationParticipants;
