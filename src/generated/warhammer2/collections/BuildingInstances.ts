
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingInstances {
  export const KEY = new CollectionKey("building_instances");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly numInstances: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.numInstances = values["num_instances"];
    }
    
  }
}

export default BuildingInstances;
