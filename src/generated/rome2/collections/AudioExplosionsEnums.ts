
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioExplosionsEnums {
  export const KEY = new CollectionKey("audio_explosions_enums");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AudioExplosionsEnums;
