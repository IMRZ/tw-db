
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioMaterials {
  export const KEY = new CollectionKey("audio_materials");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly switch: string;
    readonly canBeSnow: boolean;
    readonly _fallback: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.switch = values["switch"];
      this.canBeSnow = !!values["can_be_snow"];
      this._fallback = values["fallback"];
    }
    
    get fallback(): AudioMaterials.Entry | undefined {
      const collection = <AudioMaterials.Entry[]>this.collectionCache.getCollection(AudioMaterials.KEY, AudioMaterials.Entry);
      return collection.find(entry => entry.key === this._fallback);
    }
  }
}

export default AudioMaterials;
