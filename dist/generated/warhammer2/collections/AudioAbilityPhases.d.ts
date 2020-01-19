import { CollectionCache, CollectionKey } from "../../../common";
import { AudioGroupSounds } from "./AudioGroupSounds";
export declare namespace AudioAbilityPhases {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly startEvent: string;
        readonly stopEvent: string;
        readonly maxDistance: number;
        readonly _groupSound: string;
        readonly useReverb: boolean;
        readonly switch: string;
        readonly loopingGroupSound: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get groupSound(): AudioGroupSounds.Entry | undefined;
    }
}
export default AudioAbilityPhases;
