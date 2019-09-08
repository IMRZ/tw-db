
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BuildingStates {
  export const KEY = new CollectionKey("building_states");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default BuildingStates;
