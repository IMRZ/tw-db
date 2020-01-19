
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignStormRegionDisplaySettings {
  export const KEY = new CollectionKey("campaign_storm_region_display_settings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly region: string;
    readonly tilingVfxDistance: number;
    readonly tilingVfxRandomJitter: number;
    readonly levelVfxDistance: number;
    readonly levelVfxRandomJitter: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.region = values["region"];
      this.tilingVfxDistance = values["tiling_vfx_distance"];
      this.tilingVfxRandomJitter = values["tiling_vfx_random_jitter"];
      this.levelVfxDistance = values["level_vfx_distance"];
      this.levelVfxRandomJitter = values["level_vfx_random_jitter"];
    }
    
  }
}

export default CampaignStormRegionDisplaySettings;
