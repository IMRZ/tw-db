
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyNegotiationParticipantSelections {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_participant_selections");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignDiplomacyNegotiationParticipantSelections;
