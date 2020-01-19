
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioGenericHeroIds {
  export const KEY = new CollectionKey("audio_generic_hero_ids");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AudioGenericHeroIds;
