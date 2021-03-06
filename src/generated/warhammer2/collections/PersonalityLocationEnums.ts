
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PersonalityLocationEnums {
  export const KEY = new CollectionKey("personality_location_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default PersonalityLocationEnums;
