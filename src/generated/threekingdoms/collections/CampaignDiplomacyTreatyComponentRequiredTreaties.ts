
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyExistingComponents } from "./CampaignDiplomacyExistingComponents";
import { CampaignDiplomacyNegotiationResponses } from "./CampaignDiplomacyNegotiationResponses";
import { CampaignDiplomacyVoteFilters } from "./CampaignDiplomacyVoteFilters";
import { CampaignDiplomacySelectionFilters } from "./CampaignDiplomacySelectionFilters";

export namespace CampaignDiplomacyTreatyComponentRequiredTreaties {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_component_required_treaties");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _component: string;
    readonly _requirement: string;
    readonly _proposerResponse: string;
    readonly _recipientResponse: string;
    readonly generationPriority: number;
    readonly key: string;
    readonly _dealWas: string;
    readonly applicationPriority: number;
    readonly _proposerVoteFilter: string;
    readonly _recipientVoteFilter: string;
    readonly _proposerSelectionFilter: string;
    readonly _recipientSelectionFilter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._component = values["component"];
      this._requirement = values["requirement"];
      this._proposerResponse = values["proposer_response"];
      this._recipientResponse = values["recipient_response"];
      this.generationPriority = values["generation_priority"];
      this.key = values["key"];
      this._dealWas = values["deal_was"];
      this.applicationPriority = values["application_priority"];
      this._proposerVoteFilter = values["proposer_vote_filter"];
      this._recipientVoteFilter = values["recipient_vote_filter"];
      this._proposerSelectionFilter = values["proposer_selection_filter"];
      this._recipientSelectionFilter = values["recipient_selection_filter"];
    }
    
    get component(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._component);
    }
    
    get requirement(): CampaignDiplomacyExistingComponents.Entry | undefined {
      const collection = <CampaignDiplomacyExistingComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyExistingComponents.KEY, CampaignDiplomacyExistingComponents.Entry);
      return collection.find(entry => entry.key === this._requirement);
    }
    
    get proposerResponse(): CampaignDiplomacyNegotiationResponses.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationResponses.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationResponses.KEY, CampaignDiplomacyNegotiationResponses.Entry);
      return collection.find(entry => entry.key === this._proposerResponse);
    }
    
    get recipientResponse(): CampaignDiplomacyNegotiationResponses.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationResponses.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationResponses.KEY, CampaignDiplomacyNegotiationResponses.Entry);
      return collection.find(entry => entry.key === this._recipientResponse);
    }
    
    get dealWas(): CampaignDiplomacyNegotiationResponses.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationResponses.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationResponses.KEY, CampaignDiplomacyNegotiationResponses.Entry);
      return collection.find(entry => entry.key === this._dealWas);
    }
    
    get proposerVoteFilter(): CampaignDiplomacyVoteFilters.Entry | undefined {
      const collection = <CampaignDiplomacyVoteFilters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVoteFilters.KEY, CampaignDiplomacyVoteFilters.Entry);
      return collection.find(entry => entry.filter === this._proposerVoteFilter);
    }
    
    get recipientVoteFilter(): CampaignDiplomacyVoteFilters.Entry | undefined {
      const collection = <CampaignDiplomacyVoteFilters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVoteFilters.KEY, CampaignDiplomacyVoteFilters.Entry);
      return collection.find(entry => entry.filter === this._recipientVoteFilter);
    }
    
    get proposerSelectionFilter(): CampaignDiplomacySelectionFilters.Entry | undefined {
      const collection = <CampaignDiplomacySelectionFilters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacySelectionFilters.KEY, CampaignDiplomacySelectionFilters.Entry);
      return collection.find(entry => entry.selection === this._proposerSelectionFilter);
    }
    
    get recipientSelectionFilter(): CampaignDiplomacySelectionFilters.Entry | undefined {
      const collection = <CampaignDiplomacySelectionFilters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacySelectionFilters.KEY, CampaignDiplomacySelectionFilters.Entry);
      return collection.find(entry => entry.selection === this._recipientSelectionFilter);
    }
  }
}

export default CampaignDiplomacyTreatyComponentRequiredTreaties;
