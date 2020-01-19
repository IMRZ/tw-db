
import { CollectionCache, CollectionKey } from "../../../common";


export namespace MinisterialPositionsStrings {
  export const KEY = new CollectionKey("ministerial_positions_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onScreen: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onScreen = values["on_screen"];
    }
    
  }
}

export default MinisterialPositionsStrings;
