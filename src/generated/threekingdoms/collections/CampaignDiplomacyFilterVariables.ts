
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFilters } from "./CampaignDiplomacyFilters";
import { CampaignDiplomacyVariableSources } from "./CampaignDiplomacyVariableSources";
import { CampaignDiplomacyVariables } from "./CampaignDiplomacyVariables";

export namespace CampaignDiplomacyFilterVariables {
  export const KEY = new CollectionKey("campaign_diplomacy_filter_variables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _filter: string;
    readonly _source: string;
    readonly _variable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._filter = values["filter"];
      this._source = values["source"];
      this._variable = values["variable"];
    }
    
    get filter(): CampaignDiplomacyFilters.Entry | undefined {
      const collection = <CampaignDiplomacyFilters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFilters.KEY, CampaignDiplomacyFilters.Entry);
      return collection.find(entry => entry.key === this._filter);
    }
    
    get source(): CampaignDiplomacyVariableSources.Entry | undefined {
      const collection = <CampaignDiplomacyVariableSources.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariableSources.KEY, CampaignDiplomacyVariableSources.Entry);
      return collection.find(entry => entry.key === this._source);
    }
    
    get variable(): CampaignDiplomacyVariables.Entry | undefined {
      const collection = <CampaignDiplomacyVariables.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyVariables.KEY, CampaignDiplomacyVariables.Entry);
      return collection.find(entry => entry.key === this._variable);
    }
  }
}

export default CampaignDiplomacyFilterVariables;
