
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignOverlayRadarModes {
  export const KEY = new CollectionKey("campaign_overlay_radar_modes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CampaignOverlayRadarModes;
