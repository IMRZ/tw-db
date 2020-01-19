
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosRegions } from "./StartPosRegions";
import { CampaignMapAreasOfInterest } from "./CampaignMapAreasOfInterest";

export namespace RegionAreaOfInterestDisplayJunctions {
  export const KEY = new CollectionKey("region_area_of_interest_display_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _region: string;
    readonly _areaOfInterest: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._region = values["region"];
      this._areaOfInterest = values["area_of_interest"];
    }
    
    get region(): StartPosRegions.Entry | undefined {
      const collection = <StartPosRegions.Entry[]>this.collectionCache.getCollection(StartPosRegions.KEY, StartPosRegions.Entry);
      return collection.find(entry => entry._region === this._region);
    }
    
    get areaOfInterest(): CampaignMapAreasOfInterest.Entry | undefined {
      const collection = <CampaignMapAreasOfInterest.Entry[]>this.collectionCache.getCollection(CampaignMapAreasOfInterest.KEY, CampaignMapAreasOfInterest.Entry);
      return collection.find(entry => entry.key === this._areaOfInterest);
    }
  }
}

export default RegionAreaOfInterestDisplayJunctions;
