
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioRtpcAssignments } from "./AudioRtpcAssignments";
import { AudioGroupSoundGroupings } from "./AudioGroupSoundGroupings";

export namespace AudioGroupSounds {
  export const KEY = new CollectionKey("audio_group_sounds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly eventStart: string;
    readonly eventStop: string;
    readonly distanceScaled: boolean;
    readonly densityScaled: boolean;
    readonly spotlight: boolean;
    readonly useReverb: boolean;
    readonly maxDistance: number;
    readonly split: boolean;
    readonly splitClose: number;
    readonly splitFar: number;
    readonly splitOffset: number;
    readonly groupingSize: number;
    readonly maxStartDelayNear: number;
    readonly minRefireTime: number;
    readonly sizeGameParameter: string;
    readonly groupingSwitch: string;
    readonly _linkedGroupSound: string;
    readonly rtpc1Name: string;
    readonly _rtpc1Assignment: string;
    readonly rtpc2Name: string;
    readonly _rtpc2Assignment: string;
    readonly _grouping: string;
    readonly rtpc1MaxGroupingDifference: number;
    readonly rtpc2MaxGroupingDifference: number;
    readonly maxStartDelayFar: number;
    readonly stopDelay: number;
    readonly sizeScaler: number;
    readonly minDistance: number;
    readonly _dualGroupSound: string;
    readonly minSize: number;
    readonly oneShotInfluenceDuration: number;
    readonly scaledAzimuthRtpc: string;
    readonly dopplerRtpcName: string;
    readonly obstructionSize: number;
    readonly triggerChargeTimeToTarget: number;
    readonly disableGroupMerging: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.eventStart = values["event_start"];
      this.eventStop = values["event_stop"];
      this.distanceScaled = !!values["distance_scaled"];
      this.densityScaled = !!values["density_scaled"];
      this.spotlight = !!values["spotlight"];
      this.useReverb = !!values["use_reverb"];
      this.maxDistance = values["max_distance"];
      this.split = !!values["split"];
      this.splitClose = values["split_close"];
      this.splitFar = values["split_far"];
      this.splitOffset = values["split_offset"];
      this.groupingSize = values["grouping_size"];
      this.maxStartDelayNear = values["max_start_delay_near"];
      this.minRefireTime = values["min_refire_time"];
      this.sizeGameParameter = values["size_game_parameter"];
      this.groupingSwitch = values["grouping_switch"];
      this._linkedGroupSound = values["linked_group_sound"];
      this.rtpc1Name = values["rtpc_1_name"];
      this._rtpc1Assignment = values["rtpc_1_assignment"];
      this.rtpc2Name = values["rtpc_2_name"];
      this._rtpc2Assignment = values["rtpc_2_assignment"];
      this._grouping = values["grouping"];
      this.rtpc1MaxGroupingDifference = values["rtpc_1_max_grouping_difference"];
      this.rtpc2MaxGroupingDifference = values["rtpc_2_max_grouping_difference"];
      this.maxStartDelayFar = values["max_start_delay_far"];
      this.stopDelay = values["stop_delay"];
      this.sizeScaler = values["size_scaler"];
      this.minDistance = values["min_distance"];
      this._dualGroupSound = values["dual_group_sound"];
      this.minSize = values["min_size"];
      this.oneShotInfluenceDuration = values["one_shot_influence_duration"];
      this.scaledAzimuthRtpc = values["scaled_azimuth_rtpc"];
      this.dopplerRtpcName = values["doppler_rtpc_name"];
      this.obstructionSize = values["obstruction_size"];
      this.triggerChargeTimeToTarget = values["trigger_charge_time_to_target"];
      this.disableGroupMerging = !!values["disable_group_merging"];
    }
    
    get linkedGroupSound(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._linkedGroupSound);
    }
    
    get rtpc1Assignment(): AudioRtpcAssignments.Entry | undefined {
      const collection = <AudioRtpcAssignments.Entry[]>this.collectionCache.getCollection(AudioRtpcAssignments.KEY, AudioRtpcAssignments.Entry);
      return collection.find(entry => entry.name === this._rtpc1Assignment);
    }
    
    get rtpc2Assignment(): AudioRtpcAssignments.Entry | undefined {
      const collection = <AudioRtpcAssignments.Entry[]>this.collectionCache.getCollection(AudioRtpcAssignments.KEY, AudioRtpcAssignments.Entry);
      return collection.find(entry => entry.name === this._rtpc2Assignment);
    }
    
    get grouping(): AudioGroupSoundGroupings.Entry | undefined {
      const collection = <AudioGroupSoundGroupings.Entry[]>this.collectionCache.getCollection(AudioGroupSoundGroupings.KEY, AudioGroupSoundGroupings.Entry);
      return collection.find(entry => entry.key === this._grouping);
    }
    
    get dualGroupSound(): AudioGroupSounds.Entry | undefined {
      const collection = <AudioGroupSounds.Entry[]>this.collectionCache.getCollection(AudioGroupSounds.KEY, AudioGroupSounds.Entry);
      return collection.find(entry => entry.name === this._dualGroupSound);
    }
  }
}

export default AudioGroupSounds;
