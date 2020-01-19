
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacySelectionFilters {
  export const KEY = new CollectionKey("campaign_diplomacy_selection_filters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly selection: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.selection = values["selection"];
    }
    
  }
}

export default CampaignDiplomacySelectionFilters;
