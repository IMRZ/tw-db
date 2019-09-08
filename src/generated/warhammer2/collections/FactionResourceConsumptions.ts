
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FactionResourceConsumptions {
  export const KEY = new CollectionKey("faction_resource_consumptions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly numberOfRegions: number;
    readonly resourceConsumption: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.numberOfRegions = values["number_of_regions"];
      this.resourceConsumption = values["resource_consumption"];
    }
    
  }
}

export default FactionResourceConsumptions;
