
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PopulationClasses {
  export const KEY = new CollectionKey("population_classes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly populationClass: string;
    readonly riots: boolean;
    readonly demands: boolean;
    readonly spawnRebelGeneral: boolean;
    readonly onscreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.populationClass = values["population_class"];
      this.riots = !!values["riots"];
      this.demands = !!values["demands"];
      this.spawnRebelGeneral = !!values["spawn_rebel_general"];
      this.onscreenName = values["onscreen_name"];
    }
    
  }
}

export default PopulationClasses;
