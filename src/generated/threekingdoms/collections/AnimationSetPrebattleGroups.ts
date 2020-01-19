
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AnimationSetPrebattleGroups {
  export const KEY = new CollectionKey("animation_set_prebattle_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AnimationSetPrebattleGroups;
