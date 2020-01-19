
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignGroupCharacterDefectionLoyaltyThresholds {
  export const KEY = new CollectionKey("campaign_group_character_defection_loyalty_thresholds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly mainLoyaltyThresholdValue: number;
    readonly spouseLoyaltyThresholdValue: number;
    readonly childLoyaltyThresholdValue: number;
    readonly mainLoyaltyLowWarningThreshold: number;
    readonly governorRetireLoyaltyThreshold: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this.mainLoyaltyThresholdValue = values["main_loyalty_threshold_value"];
      this.spouseLoyaltyThresholdValue = values["spouse_loyalty_threshold_value"];
      this.childLoyaltyThresholdValue = values["child_loyalty_threshold_value"];
      this.mainLoyaltyLowWarningThreshold = values["main_loyalty_low_warning_threshold"];
      this.governorRetireLoyaltyThreshold = values["governor_retire_loyalty_threshold"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
  }
}

export default CampaignGroupCharacterDefectionLoyaltyThresholds;
