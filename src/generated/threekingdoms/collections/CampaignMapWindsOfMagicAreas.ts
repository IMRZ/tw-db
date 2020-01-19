
import { CollectionCache, CollectionKey } from "../../../common";
import { RegionGroups } from "./RegionGroups";
import { Campaigns } from "./Campaigns";

export namespace CampaignMapWindsOfMagicAreas {
  export const KEY = new CollectionKey("campaign_map_winds_of_magic_areas");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _regionGroup: string;
    readonly localisedName: string;
    readonly _campaign: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._regionGroup = values["region_group"];
      this.localisedName = values["localised_name"];
      this._campaign = values["campaign"];
    }
    
    get regionGroup(): RegionGroups.Entry | undefined {
      const collection = <RegionGroups.Entry[]>this.collectionCache.getCollection(RegionGroups.KEY, RegionGroups.Entry);
      return collection.find(entry => entry.groupKey === this._regionGroup);
    }
    
    get campaign(): Campaigns.Entry | undefined {
      const collection = <Campaigns.Entry[]>this.collectionCache.getCollection(Campaigns.KEY, Campaigns.Entry);
      return collection.find(entry => entry.campaignName === this._campaign);
    }
  }
}

export default CampaignMapWindsOfMagicAreas;
