
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiations } from "./CampaignDiplomacyFollowupNegotiations";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace CampaignDiplomacyFollowupNegotiationProposedComponents {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiation_proposed_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _negotiation: string;
    readonly _proposer: string;
    readonly _recipient: string;
    readonly _component: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._negotiation = values["negotiation"];
      this._proposer = values["proposer"];
      this._recipient = values["recipient"];
      this._component = values["component"];
    }
    
    get negotiation(): CampaignDiplomacyFollowupNegotiations.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiations.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiations.KEY, CampaignDiplomacyFollowupNegotiations.Entry);
      return collection.find(entry => entry.id === this._negotiation);
    }
    
    get proposer(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationParticipants.KEY, CampaignDiplomacyFollowupNegotiationParticipants.Entry);
      return collection.find(entry => entry.id === this._proposer);
    }
    
    get recipient(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationParticipants.KEY, CampaignDiplomacyFollowupNegotiationParticipants.Entry);
      return collection.find(entry => entry.id === this._recipient);
    }
    
    get component(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._component);
    }
  }
}

export default CampaignDiplomacyFollowupNegotiationProposedComponents;
