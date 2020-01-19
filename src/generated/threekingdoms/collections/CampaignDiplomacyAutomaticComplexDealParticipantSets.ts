
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyAutomaticComplexDealParticipantSets {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_complex_deal_participant_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignDiplomacyAutomaticComplexDealParticipantSets;
