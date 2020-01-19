import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioCampaignEnvironmentTreeSounds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly sampleRange: number;
        readonly groupingSize: number;
        readonly requiredIntensity: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioCampaignEnvironmentTreeSounds;
