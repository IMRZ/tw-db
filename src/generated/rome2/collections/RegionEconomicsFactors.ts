
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RegionEconomicsFactors {
  export const KEY = new CollectionKey("region_economics_factors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly factor: string;
    readonly positivePipPath: string;
    readonly positiveTooltip: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.factor = values["factor"];
      this.positivePipPath = values["positive_pip_path"];
      this.positiveTooltip = values["positive_tooltip"];
    }
    
  }
}

export default RegionEconomicsFactors;
