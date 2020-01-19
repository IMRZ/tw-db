
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";

export namespace CampaignDiplomacyGroupVariables {
  export const KEY = new CollectionKey("campaign_diplomacy_group_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _variable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._variable = values["variable"];
    }
    
    get group(): CampaignDiplomacyGroups.Entry | undefined {
      const collection = <CampaignDiplomacyGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyGroups.KEY, CampaignDiplomacyGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
    
    get variable(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._variable);
    }
  }
}

export default CampaignDiplomacyGroupVariables;
