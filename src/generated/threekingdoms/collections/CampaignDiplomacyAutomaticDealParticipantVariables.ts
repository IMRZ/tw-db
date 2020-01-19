
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticDealParticipants } from "./CampaignDiplomacyAutomaticDealParticipants";
import { CampaignDiplomacyFilterSources } from "./CampaignDiplomacyFilterSources";

export namespace CampaignDiplomacyAutomaticDealParticipantVariables {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_deal_participant_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _participant: string;
    readonly _variable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._participant = values["participant"];
      this._variable = values["variable"];
    }
    
    get participant(): CampaignDiplomacyAutomaticDealParticipants.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDealParticipants.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDealParticipants.KEY, CampaignDiplomacyAutomaticDealParticipants.Entry);
      return collection.find(entry => entry.id === this._participant);
    }
    
    get variable(): CampaignDiplomacyFilterSources.Entry | undefined {
      const collection = <CampaignDiplomacyFilterSources.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFilterSources.KEY, CampaignDiplomacyFilterSources.Entry);
      return collection.find(entry => entry.key === this._variable);
    }
  }
}

export default CampaignDiplomacyAutomaticDealParticipantVariables;
