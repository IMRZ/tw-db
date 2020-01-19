
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignMapTooltipStatuses } from "./CampaignMapTooltipStatuses";

export namespace CampaignMapTooltipStatusTypes {
  export const KEY = new CollectionKey("campaign_map_tooltip_status_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignGroup: string;
    readonly _status: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignGroup = values["campaign_group"];
      this._status = values["status"];
    }
    
    get campaignGroup(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._campaignGroup);
    }
    
    get status(): CampaignMapTooltipStatuses.Entry | undefined {
      const collection = <CampaignMapTooltipStatuses.Entry[]>this.collectionCache.getCollection(CampaignMapTooltipStatuses.KEY, CampaignMapTooltipStatuses.Entry);
      return collection.find(entry => entry.status === this._status);
    }
  }
}

export default CampaignMapTooltipStatusTypes;
