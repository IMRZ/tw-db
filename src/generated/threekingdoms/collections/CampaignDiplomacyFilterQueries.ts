
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFilters } from "./CampaignDiplomacyFilters";
import { CampaignDiplomacyVariableSources } from "./CampaignDiplomacyVariableSources";
import { CampaignDiplomacyRequirementSets } from "./CampaignDiplomacyRequirementSets";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";

export namespace CampaignDiplomacyFilterQueries {
  export const KEY = new CollectionKey("campaign_diplomacy_filter_queries");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _filter: string;
    readonly _variableSource: string;
    readonly _requirementSet: string;
    readonly _variable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._filter = values["filter"];
      this._variableSource = values["variable_source"];
      this._requirementSet = values["requirement_set"];
      this._variable = values["variable"];
    }
    
    get filter(): CampaignDiplomacyFilters.Entry | undefined {
      const collection = <CampaignDiplomacyFilters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFilters.KEY, CampaignDiplomacyFilters.Entry);
      return collection.find(entry => entry.key === this._filter);
    }
    
    get variableSource(): CampaignDiplomacyVariableSources.Entry | undefined {
      const collection = <CampaignDiplomacyVariableSources.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariableSources.KEY, CampaignDiplomacyVariableSources.Entry);
      return collection.find(entry => entry.key === this._variableSource);
    }
    
    get requirementSet(): CampaignDiplomacyRequirementSets.Entry | undefined {
      const collection = <CampaignDiplomacyRequirementSets.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyRequirementSets.KEY, CampaignDiplomacyRequirementSets.Entry);
      return collection.find(entry => entry.key === this._requirementSet);
    }
    
    get variable(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._variable);
    }
  }
}

export default CampaignDiplomacyFilterQueries;
