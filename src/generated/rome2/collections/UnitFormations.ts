
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitFormations {
  export const KEY = new CollectionKey("unit_formations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitFormations;
