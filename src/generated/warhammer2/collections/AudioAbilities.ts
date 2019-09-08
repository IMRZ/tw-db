
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioAbilities {
  export const KEY = new CollectionKey("audio_abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly uiEnableEvent: string;
    readonly uiTargettingEventStart: string;
    readonly uiTargettingEventStop: string;
    readonly uiDisableEvent: string;
    readonly uiSelectEvent: string;
    readonly enableEvent: string;
    readonly disableEvent: string;
    readonly maxDistance: number;
    readonly useReverb: boolean;
    readonly switch: string;
    readonly windUpTargetEnableEvent: string;
    readonly windUpTargetDisableEvent: string;
    readonly windUpTargetMaxDistance: number;
    readonly windUpTargetUseReverb: boolean;
    readonly windUpTargetSwitch: string;
    readonly useActiveTime: boolean;
    readonly useWindUpTime: boolean;
    readonly castingRtpcName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.uiEnableEvent = values["ui_enable_event"];
      this.uiTargettingEventStart = values["ui_targetting_event_start"];
      this.uiTargettingEventStop = values["ui_targetting_event_stop"];
      this.uiDisableEvent = values["ui_disable_event"];
      this.uiSelectEvent = values["ui_select_event"];
      this.enableEvent = values["enable_event"];
      this.disableEvent = values["disable_event"];
      this.maxDistance = values["max_distance"];
      this.useReverb = !!values["use_reverb"];
      this.switch = values["switch"];
      this.windUpTargetEnableEvent = values["wind_up_target_enable_event"];
      this.windUpTargetDisableEvent = values["wind_up_target_disable_event"];
      this.windUpTargetMaxDistance = values["wind_up_target_max_distance"];
      this.windUpTargetUseReverb = !!values["wind_up_target_use_reverb"];
      this.windUpTargetSwitch = values["wind_up_target_switch"];
      this.useActiveTime = !!values["use_active_time"];
      this.useWindUpTime = !!values["use_wind_up_time"];
      this.castingRtpcName = values["casting_rtpc_name"];
    }
    
  }
}

export default AudioAbilities;
