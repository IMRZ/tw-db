
import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignFactionPotentialTypes } from "./CampaignFactionPotentialTypes";

export namespace CampaignFactionPotentialCategories {
  export const KEY = new CollectionKey("campaign_faction_potential_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _campaignPotential: string;
    readonly baseValue: number;
    readonly randomRollMean: number;
    readonly randomRollLowerBound: number;
    readonly randomRollUpperBound: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._campaignPotential = values["campaign_potential"];
      this.baseValue = values["base_value"];
      this.randomRollMean = values["random_roll_mean"];
      this.randomRollLowerBound = values["random_roll_lower_bound"];
      this.randomRollUpperBound = values["random_roll_upper_bound"];
    }
    
    get campaignPotential(): CampaignFactionPotentialTypes.Entry | undefined {
      const collection = <CampaignFactionPotentialTypes.Entry[]>this.collectionCache.getCollection(CampaignFactionPotentialTypes.KEY, CampaignFactionPotentialTypes.Entry);
      return collection.find(entry => entry.factionPotentialType === this._campaignPotential);
    }
  }
}

export default CampaignFactionPotentialCategories;
