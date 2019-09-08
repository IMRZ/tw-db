
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AmbientBattlefieldObjects {
  export const KEY = new CollectionKey("ambient_battlefield_objects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly ambientBattlefieldObject: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.ambientBattlefieldObject = values["ambient_battlefield_object"];
    }
    
  }
}

export default AmbientBattlefieldObjects;
