
import { CollectionCache, CollectionKey } from "../../../common";
import { PlayerGameDifficultyTypes } from "./PlayerGameDifficultyTypes";

export namespace CampaignTaxAdministrationCosts {
  export const KEY = new CollectionKey("campaign_tax_administration_costs");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _difficulty: string;
    readonly regionCount: number;
    readonly administrationCost: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._difficulty = values["difficulty"];
      this.regionCount = values["region_count"];
      this.administrationCost = values["administration_cost"];
    }
    
    get difficulty(): PlayerGameDifficultyTypes.Entry | undefined {
      const collection = <PlayerGameDifficultyTypes.Entry[]>this.collectionCache.getCollection(PlayerGameDifficultyTypes.KEY, PlayerGameDifficultyTypes.Entry);
      return collection.find(entry => entry.difficultyType === this._difficulty);
    }
  }
}

export default CampaignTaxAdministrationCosts;
