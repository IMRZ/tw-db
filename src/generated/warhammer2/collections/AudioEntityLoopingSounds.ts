
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioRtpcAssignments } from "./AudioRtpcAssignments";

export namespace AudioEntityLoopingSounds {
  export const KEY = new CollectionKey("audio_entity_looping_sounds");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly eventStart: string;
    readonly eventStop: string;
    readonly useReverb: boolean;
    readonly useObstruction: boolean;
    readonly limitationScale: number;
    readonly rtpc1Name: string;
    readonly _rtpc1Assignment: string;
    readonly rtpc2Name: string;
    readonly _rtpc2Assignment: string;
    readonly switch1: string;
    readonly dopplerRtpcName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.eventStart = values["event_start"];
      this.eventStop = values["event_stop"];
      this.useReverb = !!values["use_reverb"];
      this.useObstruction = !!values["use_obstruction"];
      this.limitationScale = values["limitation_scale"];
      this.rtpc1Name = values["rtpc_1_name"];
      this._rtpc1Assignment = values["rtpc_1_assignment"];
      this.rtpc2Name = values["rtpc_2_name"];
      this._rtpc2Assignment = values["rtpc_2_assignment"];
      this.switch1 = values["switch_1"];
      this.dopplerRtpcName = values["doppler_rtpc_name"];
    }
    
    get rtpc1Assignment(): AudioRtpcAssignments.Entry | undefined {
      const collection = <AudioRtpcAssignments.Entry[]>this.collectionCache.getCollection(AudioRtpcAssignments.KEY, AudioRtpcAssignments.Entry);
      return collection.find(entry => entry.name === this._rtpc1Assignment);
    }
    
    get rtpc2Assignment(): AudioRtpcAssignments.Entry | undefined {
      const collection = <AudioRtpcAssignments.Entry[]>this.collectionCache.getCollection(AudioRtpcAssignments.KEY, AudioRtpcAssignments.Entry);
      return collection.find(entry => entry.name === this._rtpc2Assignment);
    }
  }
}

export default AudioEntityLoopingSounds;
