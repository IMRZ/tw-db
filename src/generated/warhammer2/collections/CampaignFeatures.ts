
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignFeatureIds } from "./CampaignFeatureIds";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignFeatures {
  export const KEY = new CollectionKey("campaign_features");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _feature: string;
    readonly _group: string;
    readonly available: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._feature = values["feature"];
      this._group = values["group"];
      this.available = !!values["available"];
    }
    
    get feature(): CampaignFeatureIds.Entry | undefined {
      const collection = <CampaignFeatureIds.Entry[]>this.collectionCache.getCollection(CampaignFeatureIds.KEY, CampaignFeatureIds.Entry);
      return collection.find(entry => entry.id === this._feature);
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
  }
}

export default CampaignFeatures;
