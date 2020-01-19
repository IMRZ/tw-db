
import { CollectionCache, CollectionKey } from "../../../common";


export namespace LoadingScreenSpeechGroups {
  export const KEY = new CollectionKey("loading_screen_speech_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default LoadingScreenSpeechGroups;
