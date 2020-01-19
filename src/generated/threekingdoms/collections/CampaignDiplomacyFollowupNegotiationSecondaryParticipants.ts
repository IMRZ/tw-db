
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiations } from "./CampaignDiplomacyFollowupNegotiations";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";

export namespace CampaignDiplomacyFollowupNegotiationSecondaryParticipants {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiation_secondary_participants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _negotiation: string;
    readonly _role: string;
    readonly _participant: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._negotiation = values["negotiation"];
      this._role = values["role"];
      this._participant = values["participant"];
    }
    
    get negotiation(): CampaignDiplomacyFollowupNegotiations.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiations.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiations.KEY, CampaignDiplomacyFollowupNegotiations.Entry);
      return collection.find(entry => entry.id === this._negotiation);
    }
    
    get role(): CampaignDiplomacyNegotiationRoles.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationRoles.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationRoles.KEY, CampaignDiplomacyNegotiationRoles.Entry);
      return collection.find(entry => entry.key === this._role);
    }
    
    get participant(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationParticipants.KEY, CampaignDiplomacyFollowupNegotiationParticipants.Entry);
      return collection.find(entry => entry.id === this._participant);
    }
  }
}

export default CampaignDiplomacyFollowupNegotiationSecondaryParticipants;
