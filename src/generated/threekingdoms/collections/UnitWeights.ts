
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitWeights {
  export const KEY = new CollectionKey("unit_weights");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenText: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenText = values["onscreen_text"];
    }
    
  }
}

export default UnitWeights;
