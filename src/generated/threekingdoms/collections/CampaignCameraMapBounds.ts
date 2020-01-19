
import { CollectionCache, CollectionKey } from "../../../common";
import { Campaigns } from "./Campaigns";

export namespace CampaignCameraMapBounds {
  export const KEY = new CollectionKey("campaign_camera_map_bounds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaign: string;
    readonly minX: number;
    readonly minY: number;
    readonly maxX: number;
    readonly maxY: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaign = values["campaign"];
      this.minX = values["min_x"];
      this.minY = values["min_y"];
      this.maxX = values["max_x"];
      this.maxY = values["max_y"];
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default CampaignCameraMapBounds;
