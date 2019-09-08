
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TownWealthGrowthFactors {
  export const KEY = new CollectionKey("town_wealth_growth_factors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly factor: string;
    readonly positivePipPath: string;
    readonly positiveTooltip: string;
    readonly negativePipPath: string;
    readonly negativeTooltip: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.factor = values["factor"];
      this.positivePipPath = values["positive_pip_path"];
      this.positiveTooltip = values["positive_tooltip"];
      this.negativePipPath = values["negative_pip_path"];
      this.negativeTooltip = values["negative_tooltip"];
    }
    
  }
}

export default TownWealthGrowthFactors;
