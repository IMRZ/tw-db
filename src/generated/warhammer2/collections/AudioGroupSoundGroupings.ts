
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioRtpcAssignments } from "./AudioRtpcAssignments";

export namespace AudioGroupSoundGroupings {
  export const KEY = new CollectionKey("audio_group_sound_groupings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly eventStart: string;
    readonly eventStop: string;
    readonly rtpc1Name: string;
    readonly _rtpc1Assignment: string;
    readonly groupingSize: number;
    readonly rtpc1MaxGroupingDifference: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.eventStart = values["event_start"];
      this.eventStop = values["event_stop"];
      this.rtpc1Name = values["rtpc_1_name"];
      this._rtpc1Assignment = values["rtpc_1_assignment"];
      this.groupingSize = values["grouping_size"];
      this.rtpc1MaxGroupingDifference = values["rtpc_1_max_grouping_difference"];
    }
    
    get rtpc1Assignment(): AudioRtpcAssignments.Entry | undefined {
      const collection = <AudioRtpcAssignments.Entry[]>this.collectionCache.getCollection(AudioRtpcAssignments.KEY, AudioRtpcAssignments.Entry);
      return collection.find(entry => entry.name === this._rtpc1Assignment);
    }
  }
}

export default AudioGroupSoundGroupings;
