
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyFilters } from "./CampaignDiplomacyFilters";
import { CampaignDiplomacyFilterSources } from "./CampaignDiplomacyFilterSources";

export namespace CampaignDiplomacyFilterElements {
  export const KEY = new CollectionKey("campaign_diplomacy_filter_elements");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _filter: string;
    readonly _source: string;
    readonly _criteria: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._filter = values["filter"];
      this._source = values["source"];
      this._criteria = values["criteria"];
    }
    
    get filter(): CampaignDiplomacyFilters.Entry | undefined {
      const collection = <CampaignDiplomacyFilters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFilters.KEY, CampaignDiplomacyFilters.Entry);
      return collection.find(entry => entry.key === this._filter);
    }
    
    get source(): CampaignDiplomacyFilterSources.Entry | undefined {
      const collection = <CampaignDiplomacyFilterSources.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFilterSources.KEY, CampaignDiplomacyFilterSources.Entry);
      return collection.find(entry => entry.key === this._source);
    }
  }
}

export default CampaignDiplomacyFilterElements;
