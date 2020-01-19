
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { FactionResourceIds } from "./FactionResourceIds";

export namespace CampaignGroupMemberCriteriaFactionResources {
  export const KEY = new CollectionKey("campaign_group_member_criteria_faction_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._value = values["value"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get value(): FactionResourceIds.Entry | undefined {
      const collection = <FactionResourceIds.Entry[]>this.collectionCache.getCollection(FactionResourceIds.KEY, FactionResourceIds.Entry);
      return collection.find(entry => entry.factionResourceFlag === this._value);
    }
  }
}

export default CampaignGroupMemberCriteriaFactionResources;
