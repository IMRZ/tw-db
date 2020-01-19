
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignGroupCivilWarDefectionLoyaltyThresholds {
  export const KEY = new CollectionKey("campaign_group_civil_war_defection_loyalty_thresholds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly loyaltyThresholdValue: number;
    readonly spyLoyaltyThresholdValue: number;
    readonly spyPublicOrderThresholdValue: number;
    readonly publicOrderThresholdValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this.loyaltyThresholdValue = values["loyalty_threshold_value"];
      this.spyLoyaltyThresholdValue = values["spy_loyalty_threshold_value"];
      this.spyPublicOrderThresholdValue = values["spy_public_order_threshold_value"];
      this.publicOrderThresholdValue = values["public_order_threshold_value"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
  }
}

export default CampaignGroupCivilWarDefectionLoyaltyThresholds;
