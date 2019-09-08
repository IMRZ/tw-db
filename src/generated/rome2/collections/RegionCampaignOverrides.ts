
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";
import { Campaigns } from "./Campaigns";
import { Religions } from "./Religions";

export namespace RegionCampaignOverrides {
  export const KEY = new CollectionKey("region_campaign_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: string;
    readonly _campaign: string;
    readonly _religion: string;
    readonly religionZeal: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
      this._campaign = values["campaign"];
      this._religion = values["religion"];
      this.religionZeal = values["religion_zeal"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
  }
}

export default RegionCampaignOverrides;
