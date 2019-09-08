
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { SettlementClimateTypes } from "./SettlementClimateTypes";

export namespace CampaignGroupMemberCriteriaClimates {
  export const KEY = new CollectionKey("campaign_group_member_criteria_climates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _climate: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._climate = values["climate"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get climate(): SettlementClimateTypes.Entry | undefined {
      const collection = <SettlementClimateTypes.Entry[]>this.collectionCache.getCollection(SettlementClimateTypes.KEY, SettlementClimateTypes.Entry);
      return collection.find(entry => entry.type === this._climate);
    }
  }
}

export default CampaignGroupMemberCriteriaClimates;
