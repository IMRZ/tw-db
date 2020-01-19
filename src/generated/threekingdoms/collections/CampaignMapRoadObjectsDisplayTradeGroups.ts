
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignMapRoadObjectsDisplayModelGroups } from "./CampaignMapRoadObjectsDisplayModelGroups";

export namespace CampaignMapRoadObjectsDisplayTradeGroups {
  export const KEY = new CollectionKey("campaign_map_road_objects_display_trade_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _modelGroup: string;
    readonly frequency: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._modelGroup = values["model_group"];
      this.frequency = values["frequency"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get modelGroup(): CampaignMapRoadObjectsDisplayModelGroups.Entry | undefined {
      const collection = <CampaignMapRoadObjectsDisplayModelGroups.Entry[]>this.collectionCache.getCollection(CampaignMapRoadObjectsDisplayModelGroups.KEY, CampaignMapRoadObjectsDisplayModelGroups.Entry);
      return collection.find(entry => entry.group === this._modelGroup);
    }
  }
}

export default CampaignMapRoadObjectsDisplayTradeGroups;
