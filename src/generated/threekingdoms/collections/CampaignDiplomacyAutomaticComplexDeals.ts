
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticDeals } from "./CampaignDiplomacyAutomaticDeals";
import { CampaignDiplomacyAutomaticComplexDealParticipantSets } from "./CampaignDiplomacyAutomaticComplexDealParticipantSets";

export namespace CampaignDiplomacyAutomaticComplexDeals {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_complex_deals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deal: string;
    readonly _participants: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deal = values["deal"];
      this._participants = values["participants"];
    }
    
    get deal(): CampaignDiplomacyAutomaticDeals.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDeals.KEY, CampaignDiplomacyAutomaticDeals.Entry);
      return collection.find(entry => entry.id === this._deal);
    }
    
    get participants(): CampaignDiplomacyAutomaticComplexDealParticipantSets.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticComplexDealParticipantSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticComplexDealParticipantSets.KEY, CampaignDiplomacyAutomaticComplexDealParticipantSets.Entry);
      return collection.find(entry => entry.id === this._participants);
    }
  }
}

export default CampaignDiplomacyAutomaticComplexDeals;
