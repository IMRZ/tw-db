
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { DiplomacyNegotiationAttitudes } from "./DiplomacyNegotiationAttitudes";

export namespace CampaignGroupMemberCriteriaDiplomaticAttitudes {
  export const KEY = new CollectionKey("campaign_group_member_criteria_diplomatic_attitudes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _attitude: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._attitude = values["attitude"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get attitude(): DiplomacyNegotiationAttitudes.Entry | undefined {
      const collection = <DiplomacyNegotiationAttitudes.Entry[]>this.collectionCache.getCollection(DiplomacyNegotiationAttitudes.KEY, DiplomacyNegotiationAttitudes.Entry);
      return collection.find(entry => entry.key === this._attitude);
    }
  }
}

export default CampaignGroupMemberCriteriaDiplomaticAttitudes;
