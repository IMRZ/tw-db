
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AnimationTriggers {
  export const KEY = new CollectionKey("animation_triggers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AnimationTriggers;
