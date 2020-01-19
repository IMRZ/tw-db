
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioMaterials } from "./AudioMaterials";

export namespace AudioBattleGroundTypes {
  export const KEY = new CollectionKey("audio_battle_ground_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly switch: string;
    readonly canBeSnow: boolean;
    readonly _fallback: string;
    readonly _audioMaterial: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.switch = values["switch"];
      this.canBeSnow = !!values["can_be_snow"];
      this._fallback = values["fallback"];
      this._audioMaterial = values["audio_material"];
    }
    
    get fallback(): AudioBattleGroundTypes.Entry | undefined {
      const collection = <AudioBattleGroundTypes.Entry[]>this.collectionCache.getCollection(AudioBattleGroundTypes.KEY, AudioBattleGroundTypes.Entry);
      return collection.find(entry => entry.key === this._fallback);
    }
    
    get audioMaterial(): AudioMaterials.Entry | undefined {
      const collection = <AudioMaterials.Entry[]>this.collectionCache.getCollection(AudioMaterials.KEY, AudioMaterials.Entry);
      return collection.find(entry => entry.key === this._audioMaterial);
    }
  }
}

export default AudioBattleGroundTypes;
