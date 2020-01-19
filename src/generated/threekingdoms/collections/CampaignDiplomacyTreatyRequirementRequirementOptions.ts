
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyRequirements } from "./CampaignDiplomacyTreatyRequirements";
import { CampaignDiplomacyTreatyRequirementOptions } from "./CampaignDiplomacyTreatyRequirementOptions";

export namespace CampaignDiplomacyTreatyRequirementRequirementOptions {
  export const KEY = new CollectionKey("campaign_diplomacy_treaty_requirement_requirement_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _requirement: string;
    readonly _option: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._requirement = values["requirement"];
      this._option = values["option"];
    }
    
    get requirement(): CampaignDiplomacyTreatyRequirements.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyRequirements.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyRequirements.KEY, CampaignDiplomacyTreatyRequirements.Entry);
      return collection.find(entry => entry.key === this._requirement);
    }
    
    get option(): CampaignDiplomacyTreatyRequirementOptions.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyRequirementOptions.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyRequirementOptions.KEY, CampaignDiplomacyTreatyRequirementOptions.Entry);
      return collection.find(entry => entry.key === this._option);
    }
  }
}

export default CampaignDiplomacyTreatyRequirementRequirementOptions;
