
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignFeatureIds {
  export const KEY = new CollectionKey("campaign_feature_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignFeatureIds;
