
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapMasks } from "./CampaignMapMasks";
import { Regions } from "./Regions";

export namespace CampaignMapMasksToExcludedRegions {
  export const KEY = new CollectionKey("campaign_map_masks_to_excluded_regions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mask: string;
    readonly _excludedRegion: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mask = values["mask"];
      this._excludedRegion = values["excluded_region"];
    }
    
    get mask(): CampaignMapMasks.Entry | undefined {
      const collection = <CampaignMapMasks.Entry[]>this.collectionCache.getCollection(CampaignMapMasks.KEY, CampaignMapMasks.Entry);
      return collection.find(entry => entry.maskName === this._mask);
    }
    
    get excludedRegion(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._excludedRegion);
    }
  }
}

export default CampaignMapMasksToExcludedRegions;
