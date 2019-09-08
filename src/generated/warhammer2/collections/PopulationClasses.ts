
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PopulationClasses {
  export const KEY = new CollectionKey("population_classes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly populationClass: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.populationClass = values["population_class"];
    }
    
  }
}

export default PopulationClasses;
