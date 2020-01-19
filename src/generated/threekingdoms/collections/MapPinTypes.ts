
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MapPinTypes {
  export const KEY = new CollectionKey("map_pin_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly localisedDescription: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.localisedDescription = values["localised_description"];
    }
    
  }
}

export default MapPinTypes;
