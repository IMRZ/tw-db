import { CollectionCache, CollectionKey } from "../../../common";
import { AudioRtpcAssignments } from "./AudioRtpcAssignments";
export declare namespace AudioGroupSoundGroupings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly eventStart: string;
        readonly eventStop: string;
        readonly rtpc1Name: string;
        readonly _rtpc1Assignment: string;
        readonly groupingSize: number;
        readonly rtpc1MaxGroupingDifference: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly rtpc1Assignment: AudioRtpcAssignments.Entry | undefined;
    }
}
export default AudioGroupSoundGroupings;
