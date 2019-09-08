
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CampaignInitialLoyaltyDistribution {
  export const KEY = new CollectionKey("campaign_initial_loyalty_distribution");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly roll: number;
    readonly loyalty: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.roll = values["roll"];
      this.loyalty = values["loyalty"];
    }
    
  }
}

export default CampaignInitialLoyaltyDistribution;
