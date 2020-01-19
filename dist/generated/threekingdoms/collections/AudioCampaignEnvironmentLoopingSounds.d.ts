import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioCampaignEnvironmentLoopingSounds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly startEvent: string;
        readonly stopEvent: string;
        readonly intensityRtpc: string;
        readonly reverb: boolean;
        readonly obstruction: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioCampaignEnvironmentLoopingSounds;
