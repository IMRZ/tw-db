
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PoliticalActions {
  export const KEY = new CollectionKey("political_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly politicalActionKey: string;
    readonly onscreenDescription: string;
    readonly icon: string;
    readonly baseCostPercentage: number;
    readonly minimumCost: number;
    readonly rankMultiplier: number;
    readonly onscreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.politicalActionKey = values["political_action_key"];
      this.onscreenDescription = values["onscreen_description"];
      this.icon = values["icon"];
      this.baseCostPercentage = values["base_cost_percentage"];
      this.minimumCost = values["minimum_cost"];
      this.rankMultiplier = values["rank_multiplier"];
      this.onscreenName = values["onscreen_name"];
    }
    
  }
}

export default PoliticalActions;
