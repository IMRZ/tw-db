
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioVoAideDeCampStates } from "./AudioVoAideDeCampStates";

export namespace AideDeCampStrings {
  export const KEY = new CollectionKey("aide_de_camp_strings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _voiceoverText: string;
    readonly text: string;
    readonly audioFilename: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._voiceoverText = values["voiceover_text"];
      this.text = values["text"];
      this.audioFilename = values["audio_filename"];
    }
    
    get voiceoverText(): AudioVoAideDeCampStates.Entry | undefined {
      const collection = <AudioVoAideDeCampStates.Entry[]>this.collectionCache.getCollection(AudioVoAideDeCampStates.KEY, AudioVoAideDeCampStates.Entry);
      return collection.find(entry => entry.name === this._voiceoverText);
    }
  }
}

export default AideDeCampStrings;
