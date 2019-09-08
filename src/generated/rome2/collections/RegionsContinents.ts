
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RegionsContinents {
  export const KEY = new CollectionKey("regions_continents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly continent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.continent = values["continent"];
    }
    
  }
}

export default RegionsContinents;
