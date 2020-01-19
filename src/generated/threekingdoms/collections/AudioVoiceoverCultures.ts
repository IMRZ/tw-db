
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioVoiceoverCultures {
  export const KEY = new CollectionKey("audio_voiceover_cultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
    }
    
  }
}

export default AudioVoiceoverCultures;
