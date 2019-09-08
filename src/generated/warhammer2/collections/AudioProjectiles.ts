
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";
import { AudioRtpcAssignments } from "./AudioRtpcAssignments";
import { AudioProjectileLimitations } from "./AudioProjectileLimitations";

export namespace AudioProjectiles {
  export const KEY = new CollectionKey("audio_projectiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly maxAttenuationFire: number;
    readonly maxAttenuationInflight: number;
    readonly maxAttenuationIdle: number;
    readonly maxAttenuationImpact: number;
    readonly inflightMinSpeed: number;
    readonly fireStartEvent: string;
    readonly incomingEvent: string;
    readonly impactEvent: string;
    readonly impactBloodEvent: string;
    readonly inflightStartEvent: string;
    readonly inflightStopEvent: string;
    readonly hitTreeStartEvent: string;
    readonly hitTreeStopEvent: string;
    readonly idleStartEvent: string;
    readonly idleStopEvent: string;
    readonly obstructionSize: number;
    readonly useReverb: boolean;
    readonly _groupFire: string;
    readonly _groupInflight: string;
    readonly _groupImpact: string;
    readonly incomingTime: number;
    readonly rtpc1Name: string;
    readonly _rtpc1Assignment: string;
    readonly rtpc2Name: string;
    readonly _rtpc2Assignment: string;
    readonly switch1: string;
    readonly fireStopEvent: string;
    readonly fireOnlyTriggerOncePerVolley: boolean;
    readonly inflightOnlyTriggerOncePerVolley: boolean;
    readonly impactOnlyTriggerOncePerVolley: boolean;
    readonly flybyEvent: string;
    readonly flybyDistance: number;
    readonly dopplerRtpcName: string;
    readonly _limitation: string;
    readonly limitationScaleFire: number;
    readonly limitationScaleInflight: number;
    readonly limitationScaleImpact: number;
    readonly limitationScaleIncoming: number;
    readonly limitationScaleFlyby: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.maxAttenuationFire = values["max_attenuation_fire"];
      this.maxAttenuationInflight = values["max_attenuation_inflight"];
      this.maxAttenuationIdle = values["max_attenuation_idle"];
      this.maxAttenuationImpact = values["max_attenuation_impact"];
      this.inflightMinSpeed = values["inflight_min_speed"];
      this.fireStartEvent = values["fire_start_event"];
      this.incomingEvent = values["incoming_event"];
      this.impactEvent = values["impact_event"];
      this.impactBloodEvent = values["impact_blood_event"];
      this.inflightStartEvent = values["inflight_start_event"];
      this.inflightStopEvent = values["inflight_stop_event"];
      this.hitTreeStartEvent = values["hit_tree_start_event"];
      this.hitTreeStopEvent = values["hit_tree_stop_event"];
      this.idleStartEvent = values["idle_start_event"];
      this.idleStopEvent = values["idle_stop_event"];
      this.obstructionSize = values["obstruction_size"];
      this.useReverb = !!values["use_reverb"];
      this._groupFire = values["group_fire"];
      this._groupInflight = values["group_inflight"];
      this._groupImpact = values["group_impact"];
      this.incomingTime = values["incoming_time"];
      this.rtpc1Name = values["rtpc_1_name"];
      this._rtpc1Assignment = values["rtpc_1_assignment"];
      this.rtpc2Name = values["rtpc_2_name"];
      this._rtpc2Assignment = values["rtpc_2_assignment"];
      this.switch1 = values["switch_1"];
      this.fireStopEvent = values["fire_stop_event"];
      this.fireOnlyTriggerOncePerVolley = !!values["fire_only_trigger_once_per_volley"];
      this.inflightOnlyTriggerOncePerVolley = !!values["inflight_only_trigger_once_per_volley"];
      this.impactOnlyTriggerOncePerVolley = !!values["impact_only_trigger_once_per_volley"];
      this.flybyEvent = values["flyby_event"];
      this.flybyDistance = values["flyby_distance"];
      this.dopplerRtpcName = values["doppler_rtpc_name"];
      this._limitation = values["limitation"];
      this.limitationScaleFire = values["limitation_scale_fire"];
      this.limitationScaleInflight = values["limitation_scale_inflight"];
      this.limitationScaleImpact = values["limitation_scale_impact"];
      this.limitationScaleIncoming = values["limitation_scale_incoming"];
      this.limitationScaleFlyby = values["limitation_scale_flyby"];
    }
    
    get groupFire(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupFire);
    }
    
    get groupInflight(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupInflight);
    }
    
    get groupImpact(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._groupImpact);
    }
    
    get rtpc1Assignment(): AudioRtpcAssignments.Entry | undefined {
      const collection = <AudioRtpcAssignments.Entry[]>this.collectionCache.getCollection(AudioRtpcAssignments.KEY, AudioRtpcAssignments.Entry);
      return collection.find(entry => entry.name === this._rtpc1Assignment);
    }
    
    get rtpc2Assignment(): AudioRtpcAssignments.Entry | undefined {
      const collection = <AudioRtpcAssignments.Entry[]>this.collectionCache.getCollection(AudioRtpcAssignments.KEY, AudioRtpcAssignments.Entry);
      return collection.find(entry => entry.name === this._rtpc2Assignment);
    }
    
    get limitation(): AudioProjectileLimitations.Entry | undefined {
      const collection = <AudioProjectileLimitations.Entry[]>this.collectionCache.getCollection(AudioProjectileLimitations.KEY, AudioProjectileLimitations.Entry);
      return collection.find(entry => entry.key === this._limitation);
    }
  }
}

export default AudioProjectiles;
