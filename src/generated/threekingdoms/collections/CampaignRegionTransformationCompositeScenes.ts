
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignCompositeScenes } from "./CampaignCompositeScenes";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignRegionTransformationCompositeScenes {
  export const KEY = new CollectionKey("campaign_region_transformation_composite_scenes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _compositeScene: string;
    readonly _campaignGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._compositeScene = values["composite_scene"];
      this._campaignGroup = values["campaign_group"];
    }
    
    get compositeScene(): CampaignCompositeScenes.Entry | undefined {
      const collection = <CampaignCompositeScenes.Entry[]>this.collectionCache.getCollection(CampaignCompositeScenes.KEY, CampaignCompositeScenes.Entry);
      return collection.find(entry => entry.id === this._compositeScene);
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
  }
}

export default CampaignRegionTransformationCompositeScenes;
