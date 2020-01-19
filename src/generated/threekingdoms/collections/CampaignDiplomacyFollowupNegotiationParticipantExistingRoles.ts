
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";

export namespace CampaignDiplomacyFollowupNegotiationParticipantExistingRoles {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiation_participant_existing_roles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _participant: string;
    readonly _priorRole: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._participant = values["participant"];
      this._priorRole = values["prior_role"];
    }
    
    get participant(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationParticipants.KEY, CampaignDiplomacyFollowupNegotiationParticipants.Entry);
      return collection.find(entry => entry.id === this._participant);
    }
    
    get priorRole(): CampaignDiplomacyNegotiationRoles.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationRoles.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationRoles.KEY, CampaignDiplomacyNegotiationRoles.Entry);
      return collection.find(entry => entry.key === this._priorRole);
    }
  }
}

export default CampaignDiplomacyFollowupNegotiationParticipantExistingRoles;
