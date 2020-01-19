
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { BattleResultTypes } from "./BattleResultTypes";

export namespace CampaignGroupMemberCriteriaBattleResultTypes {
  export const KEY = new CollectionKey("campaign_group_member_criteria_battle_result_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _battleResultType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._battleResultType = values["battle_result_type"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get battleResultType(): BattleResultTypes.Entry | undefined {
      const collection = <BattleResultTypes.Entry[]>this.collectionCache.getCollection(BattleResultTypes.KEY, BattleResultTypes.Entry);
      return collection.find(entry => entry.battleResultType === this._battleResultType);
    }
  }
}

export default CampaignGroupMemberCriteriaBattleResultTypes;
