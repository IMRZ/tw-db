
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MilitaryForceTypeFeatures {
  export const KEY = new CollectionKey("military_force_type_features");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.description = values["description"];
    }
    
  }
}

export default MilitaryForceTypeFeatures;
