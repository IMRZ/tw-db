
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DiseasesCultureDeaths {
  export const KEY = new CollectionKey("diseases_culture_deaths");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _disease: any;
    readonly _culture: any;
    readonly mortalityRate: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._disease = values["disease"];
      this._culture = values["culture"];
      this.mortalityRate = values["mortality_rate"];
    }
    
  }
}

export default DiseasesCultureDeaths;
