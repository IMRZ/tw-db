
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
import { CampaignDiplomacyFilters } from "./CampaignDiplomacyFilters";

export namespace CampaignDiplomacyExistingComponents {
  export const KEY = new CollectionKey("campaign_diplomacy_existing_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _component: string;
    readonly _filter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._component = values["component"];
      this._filter = values["filter"];
    }
    
    get component(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._component);
    }
    
    get filter(): CampaignDiplomacyFilters.Entry | undefined {
      const collection = <CampaignDiplomacyFilters.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyFilters.KEY, CampaignDiplomacyFilters.Entry);
      return collection.find(entry => entry.key === this._filter);
    }
  }
}

export default CampaignDiplomacyExistingComponents;
