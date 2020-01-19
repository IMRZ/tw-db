
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationNodes } from "./CampaignDiplomacyNegotiationNodes";
import { CampaignDiplomacyNegotiationVotingSuccessCriterias } from "./CampaignDiplomacyNegotiationVotingSuccessCriterias";

export namespace CampaignDiplomacyNegotiationNodeVotes {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_node_votes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _negotiationNode: string;
    readonly proposers: boolean;
    readonly primary: boolean;
    readonly _successCriteria: string;
    readonly canRejectIndividualComponents: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._negotiationNode = values["negotiation_node"];
      this.proposers = !!values["proposers"];
      this.primary = !!values["primary"];
      this._successCriteria = values["success_criteria"];
      this.canRejectIndividualComponents = !!values["can_reject_individual_components"];
    }
    
    get negotiationNode(): CampaignDiplomacyNegotiationNodes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationNodes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationNodes.KEY, CampaignDiplomacyNegotiationNodes.Entry);
      return collection.find(entry => entry.key === this._negotiationNode);
    }
    
    get successCriteria(): CampaignDiplomacyNegotiationVotingSuccessCriterias.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationVotingSuccessCriterias.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationVotingSuccessCriterias.KEY, CampaignDiplomacyNegotiationVotingSuccessCriterias.Entry);
      return collection.find(entry => entry.criteria === this._successCriteria);
    }
  }
}

export default CampaignDiplomacyNegotiationNodeVotes;
