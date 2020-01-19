
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CaptiveOptions } from "./CaptiveOptions";
import { CaptiveOptionRequirements } from "./CaptiveOptionRequirements";

export namespace CampaignGroupCaptiveOptionRequirements {
  export const KEY = new CollectionKey("campaign_group_captive_option_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _captiveOption: string;
    readonly _requirements: string;
    readonly priority: number;
    readonly displayText: string;
    readonly enablesOption: boolean;
    readonly customTooltip: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._captiveOption = values["captive_option"];
      this._requirements = values["requirements"];
      this.priority = values["priority"];
      this.displayText = values["display_text"];
      this.enablesOption = !!values["enables_option"];
      this.customTooltip = values["custom_tooltip"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get captiveOption(): CaptiveOptions.Entry | undefined {
      const collection = <CaptiveOptions.Entry[]>this.collectionCache.getCollection(CaptiveOptions.KEY, CaptiveOptions.Entry);
      return collection.find(entry => entry.key === this._captiveOption);
    }
    
    get requirements(): CaptiveOptionRequirements.Entry | undefined {
      const collection = <CaptiveOptionRequirements.Entry[]>this.collectionCache.getCollection(CaptiveOptionRequirements.KEY, CaptiveOptionRequirements.Entry);
      return collection.find(entry => entry.key === this._requirements);
    }
  }
}

export default CampaignGroupCaptiveOptionRequirements;
