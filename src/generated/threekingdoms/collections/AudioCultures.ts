
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioCultures {
  export const KEY = new CollectionKey("audio_cultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly genericState: string;
    readonly musicState: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.genericState = values["generic_state"];
      this.musicState = values["music_state"];
    }
    
  }
}

export default AudioCultures;
