
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";

export namespace CampaignGroupMembers {
  export const KEY = new CollectionKey("campaign_group_members");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: string;
    readonly _group: string;
    readonly priority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._group = values["group"];
      this.priority = values["priority"];
    }
    
    get group(): CampaignGroups.Entry | undefined {
      const collection = <CampaignGroups.Entry[]>this.collectionCache.getCollection(CampaignGroups.KEY, CampaignGroups.Entry);
      return collection.find(entry => entry.id === this._group);
    }
  }
}

export default CampaignGroupMembers;
