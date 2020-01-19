
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyRequirementSets } from "./CampaignDiplomacyRequirementSets";
import { CampaignDiplomacyTreatyRequirements } from "./CampaignDiplomacyTreatyRequirements";

export namespace CampaignDiplomacyRequirementSetRequirements {
  export const KEY = new CollectionKey("campaign_diplomacy_requirement_set_requirements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _requirementSet: string;
    readonly _requirement: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._requirementSet = values["requirement_set"];
      this._requirement = values["requirement"];
    }
    
    get requirementSet(): CampaignDiplomacyRequirementSets.Entry | undefined {
      const collection = <CampaignDiplomacyRequirementSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyRequirementSets.KEY, CampaignDiplomacyRequirementSets.Entry);
      return collection.find(entry => entry.key === this._requirementSet);
    }
    
    get requirement(): CampaignDiplomacyTreatyRequirements.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyRequirements.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyRequirements.KEY, CampaignDiplomacyTreatyRequirements.Entry);
      return collection.find(entry => entry.key === this._requirement);
    }
  }
}

export default CampaignDiplomacyRequirementSetRequirements;
