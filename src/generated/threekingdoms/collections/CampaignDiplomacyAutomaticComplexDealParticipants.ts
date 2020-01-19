
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticComplexDealParticipantSets } from "./CampaignDiplomacyAutomaticComplexDealParticipantSets";
import { CampaignDiplomacyNegotiationRoles } from "./CampaignDiplomacyNegotiationRoles";
import { CampaignDiplomacyAutomaticDealParticipants } from "./CampaignDiplomacyAutomaticDealParticipants";

export namespace CampaignDiplomacyAutomaticComplexDealParticipants {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_complex_deal_participants");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _set: string;
    readonly _role: string;
    readonly _faction: string;
    readonly isAllianceParticipant: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._set = values["set"];
      this._role = values["role"];
      this._faction = values["faction"];
      this.isAllianceParticipant = !!values["is_alliance_participant"];
    }
    
    get set(): CampaignDiplomacyAutomaticComplexDealParticipantSets.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticComplexDealParticipantSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticComplexDealParticipantSets.KEY, CampaignDiplomacyAutomaticComplexDealParticipantSets.Entry);
      return collection.find(entry => entry.id === this._set);
    }
    
    get role(): CampaignDiplomacyNegotiationRoles.Entry | undefined {
      const collection = <CampaignDiplomacyNegotiationRoles.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyNegotiationRoles.KEY, CampaignDiplomacyNegotiationRoles.Entry);
      return collection.find(entry => entry.key === this._role);
    }
    
    get faction(): CampaignDiplomacyAutomaticDealParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDealParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDealParticipants.KEY, CampaignDiplomacyAutomaticDealParticipants.Entry);
      return collection.find(entry => entry.id === this._faction);
    }
  }
}

export default CampaignDiplomacyAutomaticComplexDealParticipants;
