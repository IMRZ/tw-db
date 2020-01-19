
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { CampaignMapWindsOfMagicStrengths } from "./CampaignMapWindsOfMagicStrengths";

export namespace CampaignMapWindsOfMagicPersistentRegionStrengths {
  export const KEY = new CollectionKey("campaign_map_winds_of_magic_persistent_region_strengths");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: string;
    readonly _strength: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
      this._strength = values["strength"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get strength(): CampaignMapWindsOfMagicStrengths.Entry | undefined {
      const collection = <CampaignMapWindsOfMagicStrengths.Entry[]>this.collectionCache.getCollection(CampaignMapWindsOfMagicStrengths.KEY, CampaignMapWindsOfMagicStrengths.Entry);
      return collection.find(entry => entry.key === this._strength);
    }
  }
}

export default CampaignMapWindsOfMagicPersistentRegionStrengths;
