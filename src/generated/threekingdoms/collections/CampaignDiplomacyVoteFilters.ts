
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyVoteFilters {
  export const KEY = new CollectionKey("campaign_diplomacy_vote_filters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly filter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.filter = values["filter"];
    }
    
  }
}

export default CampaignDiplomacyVoteFilters;
