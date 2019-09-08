
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingSuperchains {
  export const KEY = new CollectionKey("building_superchains");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly maxInstancesPerRegion: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.maxInstancesPerRegion = values["max_instances_per_region"];
    }
    
  }
}

export default BuildingSuperchains;
