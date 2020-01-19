
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAutomaticDealSituations } from "./CampaignDiplomacyAutomaticDealSituations";
import { CampaignDiplomacyAutomaticDeals } from "./CampaignDiplomacyAutomaticDeals";

export namespace CampaignDiplomacyAutomaticDealSituationDeals {
  export const KEY = new CollectionKey("campaign_diplomacy_automatic_deal_situation_deals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _situation: string;
    readonly _deal: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._situation = values["situation"];
      this._deal = values["deal"];
    }
    
    get situation(): CampaignDiplomacyAutomaticDealSituations.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDealSituations.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDealSituations.KEY, CampaignDiplomacyAutomaticDealSituations.Entry);
      return collection.find(entry => entry.situation === this._situation);
    }
    
    get deal(): CampaignDiplomacyAutomaticDeals.Entry | undefined {
      const collection = <CampaignDiplomacyAutomaticDeals.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAutomaticDeals.KEY, CampaignDiplomacyAutomaticDeals.Entry);
      return collection.find(entry => entry.id === this._deal);
    }
  }
}

export default CampaignDiplomacyAutomaticDealSituationDeals;
