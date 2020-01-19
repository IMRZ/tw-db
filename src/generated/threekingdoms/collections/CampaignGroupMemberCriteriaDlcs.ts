
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { Pdlc } from "./Pdlc";
import { CampaignGroupMemberCriteriaDlcContexts } from "./CampaignGroupMemberCriteriaDlcContexts";

export namespace CampaignGroupMemberCriteriaDlcs {
  export const KEY = new CollectionKey("campaign_group_member_criteria_dlcs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _dlc: string;
    readonly _context: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._dlc = values["dlc"];
      this._context = values["context"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get dlc(): Pdlc.Entry | undefined {
      const collection = <Pdlc.Entry[]>this.collectionCache.getCollection(Pdlc.KEY, Pdlc.Entry);
      return collection.find(entry => entry.id === this._dlc);
    }
    
    get context(): CampaignGroupMemberCriteriaDlcContexts.Entry | undefined {
      const collection = <CampaignGroupMemberCriteriaDlcContexts.Entry[]>this.collectionCache.getCollection(CampaignGroupMemberCriteriaDlcContexts.KEY, CampaignGroupMemberCriteriaDlcContexts.Entry);
      return collection.find(entry => entry.context === this._context);
    }
  }
}

export default CampaignGroupMemberCriteriaDlcs;
