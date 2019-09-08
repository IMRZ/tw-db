import { CollectionCache, CollectionKey } from "../../../common";
import { AudioVoActors } from "./AudioVoActors";
export declare namespace AudioVoActorGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly name: string;
        readonly _voActor1: string;
        readonly _voActor2: string;
        readonly _voActor3: string;
        readonly _voActor4: string;
        readonly _voActor5: string;
        readonly _voActor6: string;
        readonly _voActor7: string;
        readonly _voActor8: string;
        readonly _voActor9: string;
        readonly _voActor10: string;
        readonly _voActor11: string;
        readonly _voActor12: string;
        readonly _voActor13: string;
        readonly _voActor14: string;
        readonly _voActor15: string;
        readonly cooldownOverlap: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly voActor1: AudioVoActors.Entry | undefined;
        readonly voActor2: AudioVoActors.Entry | undefined;
        readonly voActor3: AudioVoActors.Entry | undefined;
        readonly voActor4: AudioVoActors.Entry | undefined;
        readonly voActor5: AudioVoActors.Entry | undefined;
        readonly voActor6: AudioVoActors.Entry | undefined;
        readonly voActor7: AudioVoActors.Entry | undefined;
        readonly voActor8: AudioVoActors.Entry | undefined;
        readonly voActor9: AudioVoActors.Entry | undefined;
        readonly voActor10: AudioVoActors.Entry | undefined;
        readonly voActor11: AudioVoActors.Entry | undefined;
        readonly voActor12: AudioVoActors.Entry | undefined;
        readonly voActor13: AudioVoActors.Entry | undefined;
        readonly voActor14: AudioVoActors.Entry | undefined;
        readonly voActor15: AudioVoActors.Entry | undefined;
    }
}
export default AudioVoActorGroups;
