
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CaptiveOptionSets } from "./CaptiveOptionSets";

export namespace CampaignGroupCaptiveOptionSets {
  export const KEY = new CollectionKey("campaign_group_captive_option_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _captiveOptionSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._captiveOptionSet = values["captive_option_set"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get captiveOptionSet(): CaptiveOptionSets.Entry | undefined {
      const collection = <CaptiveOptionSets.Entry[]>this.collectionCache.getCollection(CaptiveOptionSets.KEY, CaptiveOptionSets.Entry);
      return collection.find(entry => entry.key === this._captiveOptionSet);
    }
  }
}

export default CampaignGroupCaptiveOptionSets;
