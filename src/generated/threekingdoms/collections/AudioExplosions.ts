
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";
import { AudioSphereOfInfluenceOneShots } from "./AudioSphereOfInfluenceOneShots";

export namespace AudioExplosions {
  export const KEY = new CollectionKey("audio_explosions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly event: string;
    readonly maxAttenuation: number;
    readonly obstructionSize: number;
    readonly useReverb: boolean;
    readonly _groupSound: string;
    readonly onlyTriggerOncePerVolley: boolean;
    readonly _sphereOfInfluence: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.event = values["event"];
      this.maxAttenuation = values["max_attenuation"];
      this.obstructionSize = values["obstruction_size"];
      this.useReverb = !!values["use_reverb"];
      this._groupSound = values["group_sound"];
      this.onlyTriggerOncePerVolley = !!values["only_trigger_once_per_volley"];
      this._sphereOfInfluence = values["sphere_of_influence"];
    }
    
    get groupSound(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupSound);
    }
    
    get sphereOfInfluence(): AudioSphereOfInfluenceOneShots.Entry | undefined {
      const collection = <AudioSphereOfInfluenceOneShots.Entry[]>this.collectionCache.getCollection(AudioSphereOfInfluenceOneShots.KEY, AudioSphereOfInfluenceOneShots.Entry);
      return collection.find(entry => entry.key === this._sphereOfInfluence);
    }
  }
}

export default AudioExplosions;
