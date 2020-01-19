
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CampaignSeaRegionControlStatuses } from "./CampaignSeaRegionControlStatuses";

export namespace CampaignGroupMemberCriteriaSeaRegionControlStatuses {
  export const KEY = new CollectionKey("campaign_group_member_criteria_sea_region_control_statuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _seaRegionControlStatus: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._seaRegionControlStatus = values["sea_region_control_status"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get seaRegionControlStatus(): CampaignSeaRegionControlStatuses.Entry | undefined {
      const collection = <CampaignSeaRegionControlStatuses.Entry[]>this.collectionCache.getCollection(CampaignSeaRegionControlStatuses.KEY, CampaignSeaRegionControlStatuses.Entry);
      return collection.find(entry => entry.controlStatus === this._seaRegionControlStatus);
    }
  }
}

export default CampaignGroupMemberCriteriaSeaRegionControlStatuses;
