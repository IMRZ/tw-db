
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";

export namespace CampaignMapAreasOfInterest {
  export const KEY = new CollectionKey("campaign_map_areas_of_interest");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _campaignMap: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._campaignMap = values["campaign_map"];
    }
    
    get campaignMap(): CampaignMaps.Entry | undefined {
      const collection = <CampaignMaps.Entry[]>this.collectionCache.getCollection(CampaignMaps.KEY, CampaignMaps.Entry);
      return collection.find(entry => entry.mapname === this._campaignMap);
    }
  }
}

export default CampaignMapAreasOfInterest;
