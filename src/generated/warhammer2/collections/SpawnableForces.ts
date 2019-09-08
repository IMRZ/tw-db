
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SpawnableForces {
  export const KEY = new CollectionKey("spawnable_forces");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default SpawnableForces;
