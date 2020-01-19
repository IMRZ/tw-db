
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioSphereOfInfluences } from "./AudioSphereOfInfluences";

export namespace AudioSphereOfInfluenceOneShots {
  export const KEY = new CollectionKey("audio_sphere_of_influence_one_shots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _sphere: string;
    readonly duration: number;
    readonly fadeIn: number;
    readonly fadeOut: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._sphere = values["sphere"];
      this.duration = values["duration"];
      this.fadeIn = values["fade_in"];
      this.fadeOut = values["fade_out"];
    }
    
    get sphere(): AudioSphereOfInfluences.Entry | undefined {
      const collection = <AudioSphereOfInfluences.Entry[]>this.collectionCache.getCollection(AudioSphereOfInfluences.KEY, AudioSphereOfInfluences.Entry);
      return collection.find(entry => entry.key === this._sphere);
    }
  }
}

export default AudioSphereOfInfluenceOneShots;
