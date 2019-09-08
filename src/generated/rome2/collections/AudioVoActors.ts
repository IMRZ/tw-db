
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioVoActors {
  export const KEY = new CollectionKey("audio_vo_actors");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AudioVoActors;
