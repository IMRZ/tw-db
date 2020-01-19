
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";

export namespace CampaignDiplomacyGroupGroups {
  export const KEY = new CollectionKey("campaign_diplomacy_group_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _parentGroup: string;
    readonly _childGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._parentGroup = values["parent_group"];
      this._childGroup = values["child_group"];
    }
    
    get parentGroup(): CampaignDiplomacyGroups.Entry | undefined {
      const collection = <CampaignDiplomacyGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyGroups.KEY, CampaignDiplomacyGroups.Entry);
      return collection.find(entry => entry.key === this._parentGroup);
    }
    
    get childGroup(): CampaignDiplomacyGroups.Entry | undefined {
      const collection = <CampaignDiplomacyGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyGroups.KEY, CampaignDiplomacyGroups.Entry);
      return collection.find(entry => entry.key === this._childGroup);
    }
  }
}

export default CampaignDiplomacyGroupGroups;
