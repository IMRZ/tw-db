
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroupMembers } from "./CampaignGroupMembers";
import { CeoRarities } from "./CeoRarities";

export namespace CampaignGroupMemberCriteriaCeoRarities {
  export const KEY = new CollectionKey("campaign_group_member_criteria_ceo_rarities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _member: string;
    readonly _ceoRarity: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._member = values["member"];
      this._ceoRarity = values["ceo_rarity"];
    }
    
    get member(): CampaignGroupMembers.Entry | undefined {
      const collection = <CampaignGroupMembers.Entry[]>this.collectionCache.getCollection(CampaignGroupMembers.KEY, CampaignGroupMembers.Entry);
      return collection.find(entry => entry.id === this._member);
    }
    
    get ceoRarity(): CeoRarities.Entry | undefined {
      const collection = <CeoRarities.Entry[]>this.collectionCache.getCollection(CeoRarities.KEY, CeoRarities.Entry);
      return collection.find(entry => entry.key === this._ceoRarity);
    }
  }
}

export default CampaignGroupMemberCriteriaCeoRarities;
