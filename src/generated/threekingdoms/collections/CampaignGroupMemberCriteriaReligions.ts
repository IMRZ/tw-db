
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Religions } from "./Religions";
import { CampaignGroupMemberCriteriaReligionContexts } from "./CampaignGroupMemberCriteriaReligionContexts";

export namespace CampaignGroupMemberCriteriaReligions {
  export const KEY = new CollectionKey("campaign_group_member_criteria_religions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _religion: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._religion = values["religion"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get religion(): Religions.Entry | undefined {
      const collection = <Religions.Entry[]>this.collectionCache.getCollection(Religions.KEY, Religions.Entry);
      return collection.find(entry => entry.religionKey === this._religion);
    }
    
    get context(): CampaignGroupMemberCriteriaReligionContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaReligionContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaReligionContexts.KEY, CampaignGroupMemberCriteriaReligionContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaReligions;
