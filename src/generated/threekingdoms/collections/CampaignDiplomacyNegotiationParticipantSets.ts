
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyNegotiationParticipantTypes } from "./CampaignDiplomacyNegotiationParticipantTypes";

export namespace CampaignDiplomacyNegotiationParticipantSets {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_participant_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly set: string;
    readonly _primaryProposer: string;
    readonly _primaryRecipient: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.set = values["set"];
      this._primaryProposer = values["primary_proposer"];
      this._primaryRecipient = values["primary_recipient"];
    }
    
    get primaryProposer(): CampaignDiplomacyNegotiationParticipantTypes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationParticipantTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationParticipantTypes.KEY, CampaignDiplomacyNegotiationParticipantTypes.Entry);
      return collection.find(entry => entry.key === this._primaryProposer);
    }
    
    get primaryRecipient(): CampaignDiplomacyNegotiationParticipantTypes.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationParticipantTypes.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationParticipantTypes.KEY, CampaignDiplomacyNegotiationParticipantTypes.Entry);
      return collection.find(entry => entry.key === this._primaryRecipient);
    }
  }
}

export default CampaignDiplomacyNegotiationParticipantSets;
