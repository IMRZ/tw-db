
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { PostAnnexationOptions } from "./PostAnnexationOptions";

export namespace CampaignGroupPostAnnexationOptions {
  export const KEY = new CollectionKey("campaign_group_post_annexation_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _postAnnexationOption: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._postAnnexationOption = values["post_annexation_option"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get postAnnexationOption(): PostAnnexationOptions.Entry | undefined {
      const collection = <PostAnnexationOptions.Entry[]>this.collectionCache.getCollection(PostAnnexationOptions.KEY, PostAnnexationOptions.Entry);
      return collection.find(entry => entry.postAnnexationOption === this._postAnnexationOption);
    }
  }
}

export default CampaignGroupPostAnnexationOptions;
