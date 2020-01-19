
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioMeleeHitCategories {
  export const KEY = new CollectionKey("audio_melee_hit_categories");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AudioMeleeHitCategories;
