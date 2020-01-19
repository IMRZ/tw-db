import { CollectionCache, CollectionKey } from "../../../common";
import { AudioVoActors } from "./AudioVoActors";
export declare namespace AudioVoActorGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _actor1: string;
        readonly _actor2: string;
        readonly _actor3: string;
        readonly _actor4: string;
        readonly _actor5: string;
        readonly _actor6: string;
        readonly _actor7: string;
        readonly _actor8: string;
        readonly _actor9: string;
        readonly _actor10: string;
        readonly _actor11: string;
        readonly _actor12: string;
        readonly _actor13: string;
        readonly _actor14: string;
        readonly _actor15: string;
        constructor(collectionCache: CollectionCache, values: any);
        get actor1(): AudioVoActors.Entry | undefined;
        get actor2(): AudioVoActors.Entry | undefined;
        get actor3(): AudioVoActors.Entry | undefined;
        get actor4(): AudioVoActors.Entry | undefined;
        get actor5(): AudioVoActors.Entry | undefined;
        get actor6(): AudioVoActors.Entry | undefined;
        get actor7(): AudioVoActors.Entry | undefined;
        get actor8(): AudioVoActors.Entry | undefined;
        get actor9(): AudioVoActors.Entry | undefined;
        get actor10(): AudioVoActors.Entry | undefined;
        get actor11(): AudioVoActors.Entry | undefined;
        get actor12(): AudioVoActors.Entry | undefined;
        get actor13(): AudioVoActors.Entry | undefined;
        get actor14(): AudioVoActors.Entry | undefined;
        get actor15(): AudioVoActors.Entry | undefined;
    }
}
export default AudioVoActorGroups;
