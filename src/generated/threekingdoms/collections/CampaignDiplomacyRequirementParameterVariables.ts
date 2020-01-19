
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyRequirementParameters } from "./CampaignDiplomacyRequirementParameters";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";

export namespace CampaignDiplomacyRequirementParameterVariables {
  export const KEY = new CollectionKey("campaign_diplomacy_requirement_parameter_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _requirementParameter: string;
    readonly _variable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._requirementParameter = values["requirement_parameter"];
      this._variable = values["variable"];
    }
    
    get requirementParameter(): CampaignDiplomacyRequirementParameters.Entry | undefined {
      const collection = <CampaignDiplomacyRequirementParameters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyRequirementParameters.KEY, CampaignDiplomacyRequirementParameters.Entry);
      return collection.find(entry => entry.key === this._requirementParameter);
    }
    
    get variable(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._variable);
    }
  }
}

export default CampaignDiplomacyRequirementParameterVariables;
