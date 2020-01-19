
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { UnitSets } from "./UnitSets";

export namespace CampaignGroupMemberCriteriaUnitSets {
  export const KEY = new CollectionKey("campaign_group_member_criteria_unit_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _unitSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._unitSet = values["unit_set"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get unitSet(): UnitSets.Entry | undefined {
      const collection = <UnitSets.Entry[]>this.collectionCache.getCollection(UnitSets.KEY, UnitSets.Entry);
      return collection.find(entry => entry.key === this._unitSet);
    }
  }
}

export default CampaignGroupMemberCriteriaUnitSets;
