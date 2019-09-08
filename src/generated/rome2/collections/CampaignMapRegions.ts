
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";
import { Regions } from "./Regions";

export namespace CampaignMapRegions {
  export const KEY = new CollectionKey("campaign_map_regions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignMap: string;
    readonly _region: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignMap = values["campaign_map"];
      this._region = values["region"];
    }
    
    get campaignMap(): CampaignMaps.Entry | undefined {
      const collection = <CampaignMaps.Entry[]>this.collectionCache.getCollection(CampaignMaps.KEY, CampaignMaps.Entry);
      return collection.find(entry => entry.mapname === this._campaignMap);
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
  }
}

export default CampaignMapRegions;
