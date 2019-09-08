
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioGroupSoundSituations {
  export const KEY = new CollectionKey("audio_group_sound_situations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly situation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.situation = values["situation"];
    }
    
  }
}

export default AudioGroupSoundSituations;
