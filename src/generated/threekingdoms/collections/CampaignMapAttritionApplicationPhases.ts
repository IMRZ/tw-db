
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapAttritionApplicationPhases {
  export const KEY = new CollectionKey("campaign_map_attrition_application_phases");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
    }
    
  }
}

export default CampaignMapAttritionApplicationPhases;
