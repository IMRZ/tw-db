
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";

export namespace AudioAbilityPhases {
  export const KEY = new CollectionKey("audio_ability_phases");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly startEvent: string;
    readonly stopEvent: string;
    readonly maxDistance: number;
    readonly _groupSound: string;
    readonly useReverb: boolean;
    readonly switch: string;
    readonly loopingGroupSound: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.startEvent = values["start_event"];
      this.stopEvent = values["stop_event"];
      this.maxDistance = values["max_distance"];
      this._groupSound = values["group_sound"];
      this.useReverb = !!values["use_reverb"];
      this.switch = values["switch"];
      this.loopingGroupSound = !!values["looping_group_sound"];
    }
    
    get groupSound(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupSound);
    }
  }
}

export default AudioAbilityPhases;
