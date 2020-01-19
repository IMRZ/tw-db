
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapRoadObjectsDisplayModelGroups {
  export const KEY = new CollectionKey("campaign_map_road_objects_display_model_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.group = values["group"];
    }
    
  }
}

export default CampaignMapRoadObjectsDisplayModelGroups;
