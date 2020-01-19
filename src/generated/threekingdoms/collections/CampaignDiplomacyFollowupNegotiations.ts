
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationTypes } from "./CampaignDiplomacyNegotiationTypes";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";

export namespace CampaignDiplomacyFollowupNegotiations {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _negotiationType: string;
    readonly _primaryProposer: string;
    readonly _primaryRecipient: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._negotiationType = values["negotiation_type"];
      this._primaryProposer = values["primary_proposer"];
      this._primaryRecipient = values["primary_recipient"];
    }
    
    get negotiationType(): CampaignDiplomacyNegotiationTypes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationTypes.KEY, CampaignDiplomacyNegotiationTypes.Entry);
      return collection.find(entry => entry.key === this._negotiationType);
    }
    
    get primaryProposer(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationParticipants.KEY, CampaignDiplomacyFollowupNegotiationParticipants.Entry);
      return collection.find(entry => entry.id === this._primaryProposer);
    }
    
    get primaryRecipient(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationParticipants.KEY, CampaignDiplomacyFollowupNegotiationParticipants.Entry);
      return collection.find(entry => entry.id === this._primaryRecipient);
    }
  }
}

export default CampaignDiplomacyFollowupNegotiations;
