
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { BuildingLevels } from "./BuildingLevels";

export namespace CampaignGroupMemberCriteriaBuildingLevels {
  export const KEY = new CollectionKey("campaign_group_member_criteria_building_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _buildingLevel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._buildingLevel = values["building_level"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
  }
}

export default CampaignGroupMemberCriteriaBuildingLevels;
