
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyNegotiationVotingSuccessCriterias {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_voting_success_criterias");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly criteria: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.criteria = values["criteria"];
      this.description = values["description"];
    }
    
  }
}

export default CampaignDiplomacyNegotiationVotingSuccessCriterias;
