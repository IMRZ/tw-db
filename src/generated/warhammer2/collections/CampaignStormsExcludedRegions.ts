
import { CollectionCache, CollectionKey } from "../../../common";
import { Regions } from "./Regions";

export namespace CampaignStormsExcludedRegions {
  export const KEY = new CollectionKey("campaign_storms_excluded_regions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
    }
    
    get region(): Regions.Entry | undefined {
      const collection = <Regions.Entry[]>this.collectionCache.getCollection(Regions.KEY, Regions.Entry);
      return collection.find(entry => entry.key === this._region);
    }
  }
}

export default CampaignStormsExcludedRegions;
