
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapAttritionTypes {
  export const KEY = new CollectionKey("campaign_map_attrition_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignMapAttritionTypes;
