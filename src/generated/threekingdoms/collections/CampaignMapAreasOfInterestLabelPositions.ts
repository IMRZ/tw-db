
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMapAreasOfInterest } from "./CampaignMapAreasOfInterest";

export namespace CampaignMapAreasOfInterestLabelPositions {
  export const KEY = new CollectionKey("campaign_map_areas_of_interest_label_positions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignMapAreaOfInterest: string;
    readonly logicalPositionX: number;
    readonly logicalPositionY: number;
    readonly key: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignMapAreaOfInterest = values["campaign_map_area_of_interest"];
      this.logicalPositionX = values["logical_position_x"];
      this.logicalPositionY = values["logical_position_y"];
      this.key = values["key"];
    }
    
    get campaignMapAreaOfInterest(): CampaignMapAreasOfInterest.Entry | undefined {
      const collection = <CampaignMapAreasOfInterest.Entry[]>this.collectionCache.getCollection(CampaignMapAreasOfInterest.KEY, CampaignMapAreasOfInterest.Entry);
      return collection.find(entry => entry.key === this._campaignMapAreaOfInterest);
    }
  }
}

export default CampaignMapAreasOfInterestLabelPositions;
