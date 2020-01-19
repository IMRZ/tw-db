
import { CollectionCache, CollectionKey } from "../../../common";
import { LoadingScreenSpeechStrings } from "./LoadingScreenSpeechStrings";
import { AudioVoActors } from "./AudioVoActors";

export namespace LoadingScreenSpeechExcludedStrings {
  export const KEY = new CollectionKey("loading_screen_speech_excluded_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _loadingScreenSpeechString: string;
    readonly _audioVoActor: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._loadingScreenSpeechString = values["loading_screen_speech_string"];
      this._audioVoActor = values["audio_vo_actor"];
    }
    
    get loadingScreenSpeechString(): LoadingScreenSpeechStrings.Entry | undefined {
      const collection = <LoadingScreenSpeechStrings.Entry[]>this.collectionCache.getCollection(LoadingScreenSpeechStrings.KEY, LoadingScreenSpeechStrings.Entry);
      return collection.find(entry => entry.key === this._loadingScreenSpeechString);
    }
    
    get audioVoActor(): AudioVoActors.Entry | undefined {
      const collection = <AudioVoActors.Entry[]>this.collectionCache.getCollection(AudioVoActors.KEY, AudioVoActors.Entry);
      return collection.find(entry => entry.key === this._audioVoActor);
    }
  }
}

export default LoadingScreenSpeechExcludedStrings;
