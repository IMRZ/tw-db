
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";

export namespace AudioMissileWeaponTypes {
  export const KEY = new CollectionKey("audio_missile_weapon_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly switch: string;
    readonly fireStartEvent: string;
    readonly fireMaxAttenuation: number;
    readonly _groupFire: string;
    readonly fireStopEvent: string;
    readonly onlyTriggerOncePerVolley: boolean;
    readonly fireUseReverb: boolean;
    readonly fireObstructionSize: number;
    readonly _groupFireStart: string;
    readonly _groupFireStop: string;
    readonly limitationScaleFire: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.switch = values["switch"];
      this.fireStartEvent = values["fire_start_event"];
      this.fireMaxAttenuation = values["fire_max_attenuation"];
      this._groupFire = values["group_fire"];
      this.fireStopEvent = values["fire_stop_event"];
      this.onlyTriggerOncePerVolley = !!values["only_trigger_once_per_volley"];
      this.fireUseReverb = !!values["fire_use_reverb"];
      this.fireObstructionSize = values["fire_obstruction_size"];
      this._groupFireStart = values["group_fire_start"];
      this._groupFireStop = values["group_fire_stop"];
      this.limitationScaleFire = values["limitation_scale_fire"];
    }
    
    get groupFire(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupFire);
    }
    
    get groupFireStart(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupFireStart);
    }
    
    get groupFireStop(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupFireStop);
    }
  }
}

export default AudioMissileWeaponTypes;
