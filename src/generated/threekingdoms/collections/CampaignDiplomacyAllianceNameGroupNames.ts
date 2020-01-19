
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyAllianceNameGroups } from "./CampaignDiplomacyAllianceNameGroups";
import { CampaignDiplomacyAllianceNames } from "./CampaignDiplomacyAllianceNames";

export namespace CampaignDiplomacyAllianceNameGroupNames {
  export const KEY = new CollectionKey("campaign_diplomacy_alliance_name_group_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _name: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._name = values["name"];
    }
    
    get group(): CampaignDiplomacyAllianceNameGroups.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceNameGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceNameGroups.KEY, CampaignDiplomacyAllianceNameGroups.Entry);
      return collection.find(entry => entry.group === this._group);
    }
    
    get name(): CampaignDiplomacyAllianceNames.Entry | undefined {
      const collection = <CampaignDiplomacyAllianceNames.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyAllianceNames.KEY, CampaignDiplomacyAllianceNames.Entry);
      return collection.find(entry => entry.key === this._name);
    }
  }
}

export default CampaignDiplomacyAllianceNameGroupNames;
