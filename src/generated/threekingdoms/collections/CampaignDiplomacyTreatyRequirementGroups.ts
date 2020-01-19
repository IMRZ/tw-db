
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyRequirements } from "./CampaignDiplomacyTreatyRequirements";
import { CampaignDiplomacyGroups } from "./CampaignDiplomacyGroups";

export namespace CampaignDiplomacyTreatyRequirementGroups {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_requirement_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _requirement: string;
    readonly _group: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._requirement = values["requirement"];
      this._group = values["group"];
    }
    
    get requirement(): CampaignDiplomacyTreatyRequirements.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyRequirements.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyRequirements.KEY, CampaignDiplomacyTreatyRequirements.Entry);
      return collection.find(entry => entry.key === this._requirement);
    }
    
    get group(): CampaignDiplomacyGroups.Entry | undefined {
      const collection = <CampaignDiplomacyGroups.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyGroups.KEY, CampaignDiplomacyGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
  }
}

export default CampaignDiplomacyTreatyRequirementGroups;
