
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationParticipantSets } from "./CampaignDiplomacyNegotiationParticipantSets";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
import { CampaignDiplomacyNegotiationParticipantTypes } from "./CampaignDiplomacyNegotiationParticipantTypes";

export namespace CampaignDiplomacyNegotiationParticipantSetSecondaryParticipants {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_participant_set_secondary_participants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _participantSet: string;
    readonly _participantRole: string;
    readonly _participantType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._participantSet = values["participant_set"];
      this._participantRole = values["participant_role"];
      this._participantType = values["participant_type"];
    }
    
    get participantSet(): CampaignDiplomacyNegotiationParticipantSets.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationParticipantSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationParticipantSets.KEY, CampaignDiplomacyNegotiationParticipantSets.Entry);
      return collection.find(entry => entry.set === this._participantSet);
    }
    
    get participantRole(): CampaignDiplomacyNegotiationRoles.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationRoles.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationRoles.KEY, CampaignDiplomacyNegotiationRoles.Entry);
      return collection.find(entry => entry.key === this._participantRole);
    }
    
    get participantType(): CampaignDiplomacyNegotiationParticipantTypes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationParticipantTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationParticipantTypes.KEY, CampaignDiplomacyNegotiationParticipantTypes.Entry);
      return collection.find(entry => entry.key === this._participantType);
    }
  }
}

export default CampaignDiplomacyNegotiationParticipantSetSecondaryParticipants;
