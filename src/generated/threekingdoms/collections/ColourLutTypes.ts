
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ColourLutTypes {
  export const KEY = new CollectionKey("colour_lut_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default ColourLutTypes;
