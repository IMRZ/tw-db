
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCultures } from "./AudioCultures";

export namespace Cultures {
  export const KEY = new CollectionKey("cultures");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly index: number;
    readonly fallbackUiCulture: string;
    readonly name: string;
    readonly uiBackgroundImage: string;
    readonly audioState: string;
    readonly _audioCulture: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.index = values["index"];
      this.fallbackUiCulture = values["fallback_ui_culture"];
      this.name = values["name"];
      this.uiBackgroundImage = values["ui_background_image"];
      this.audioState = values["audio_state"];
      this._audioCulture = values["audio_culture"];
    }
    
    get audioCulture(): AudioCultures.Entry | undefined {
      const collection = <AudioCultures.Entry[]>this.collectionCache.getCollection(AudioCultures.KEY, AudioCultures.Entry);
      return collection.find(entry => entry.key === this._audioCulture);
    }
  }
}

export default Cultures;
