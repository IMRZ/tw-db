
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { BuildingSlotGroups } from "./BuildingSlotGroups";

export namespace CampaignGroupMemberCriteriaBuildingSlotGroups {
  export const KEY = new CollectionKey("campaign_group_member_criteria_building_slot_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _buildingSlotGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._buildingSlotGroup = values["building_slot_group"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get buildingSlotGroup(): BuildingSlotGroups.Entry | undefined {
      const collection = <BuildingSlotGroups.Entry[]>this.collectionCache.getCollection(BuildingSlotGroups.KEY, BuildingSlotGroups.Entry);
      return collection.find(entry => entry.key === this._buildingSlotGroup);
    }
  }
}

export default CampaignGroupMemberCriteriaBuildingSlotGroups;
