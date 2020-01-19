
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFollowupNegotiationParticipants } from "./CampaignDiplomacyFollowupNegotiationParticipants";
import { Factions } from "./Factions";

export namespace CampaignDiplomacyFollowupNegotiationParticipantFactions {
  export const KEY = new CollectionKey("campaign_diplomacy_followup_negotiation_participant_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _participant: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._participant = values["participant"];
      this._faction = values["faction"];
    }
    
    get participant(): CampaignDiplomacyFollowupNegotiationParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyFollowupNegotiationParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFollowupNegotiationParticipants.KEY, CampaignDiplomacyFollowupNegotiationParticipants.Entry);
      return collection.find(entry => entry.id === this._participant);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default CampaignDiplomacyFollowupNegotiationParticipantFactions;
