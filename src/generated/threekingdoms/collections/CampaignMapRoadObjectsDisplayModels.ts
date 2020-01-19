
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignMapRoadObjectsDisplayModels {
  export const KEY = new CollectionKey("campaign_map_road_objects_display_models");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly speed: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.speed = values["speed"];
    }
    
  }
}

export default CampaignMapRoadObjectsDisplayModels;
