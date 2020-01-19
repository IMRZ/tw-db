
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticDealParticipants } from "./CampaignDiplomacyAutomaticDealParticipants";
import { Factions } from "./Factions";

export namespace CampaignDiplomacyAutomaticDealParticipantFactions {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_deal_participant_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _participant: string;
    readonly _faction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._participant = values["participant"];
      this._faction = values["faction"];
    }
    
    get participant(): CampaignDiplomacyAutomaticDealParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDealParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDealParticipants.KEY, CampaignDiplomacyAutomaticDealParticipants.Entry);
      return collection.find(entry => entry.id === this._participant);
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
  }
}

export default CampaignDiplomacyAutomaticDealParticipantFactions;
