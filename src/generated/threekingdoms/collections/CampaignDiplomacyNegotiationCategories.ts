
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignDiplomacyNegotiationCategories {
  export const KEY = new CollectionKey("campaign_diplomacy_negotiation_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly category: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.category = values["category"];
    }
    
  }
}

export default CampaignDiplomacyNegotiationCategories;
