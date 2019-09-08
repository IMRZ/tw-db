
import { CollectionCache, CollectionKey } from "../../../common";
import { Technologies } from "./Technologies";
import { AudioUiCategories } from "./AudioUiCategories";

export namespace AudioTechnologies {
  export const KEY = new CollectionKey("audio_technologies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technology: string;
    readonly _uiAudio: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technology = values["technology"];
      this._uiAudio = values["ui_audio"];
    }
    
    get technology(): Technologies.Entry | undefined {
      const collection = <Technologies.Entry[]>this.collectionCache.getCollection(Technologies.KEY, Technologies.Entry);
      return collection.find(entry => entry.key === this._technology);
    }
    
    get uiAudio(): AudioUiCategories.Entry | undefined {
      const collection = <AudioUiCategories.Entry[]>this.collectionCache.getCollection(AudioUiCategories.KEY, AudioUiCategories.Entry);
      return collection.find(entry => entry.key === this._uiAudio);
    }
  }
}

export default AudioTechnologies;
