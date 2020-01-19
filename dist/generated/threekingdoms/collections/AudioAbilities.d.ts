import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioAbilities {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioAbilities;
