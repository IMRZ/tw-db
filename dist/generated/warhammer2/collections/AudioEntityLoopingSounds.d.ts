import { CollectionCache, CollectionKey } from "../../../common";
import { AudioRtpcAssignments } from "./AudioRtpcAssignments";
export declare namespace AudioEntityLoopingSounds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        readonly rtpc1Assignment: AudioRtpcAssignments.Entry | undefined;
        readonly rtpc2Assignment: AudioRtpcAssignments.Entry | undefined;
    }
}
export default AudioEntityLoopingSounds;
