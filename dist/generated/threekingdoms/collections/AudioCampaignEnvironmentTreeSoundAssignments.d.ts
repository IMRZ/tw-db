import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignMaps } from "./AudioCampaignMaps";
import { AudioCampaignEnvironmentTreeSounds } from "./AudioCampaignEnvironmentTreeSounds";
export declare namespace AudioCampaignEnvironmentTreeSoundAssignments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _map: string;
        readonly _sound: string;
        constructor(collectionCache: CollectionCache, values: any);
        get map(): AudioCampaignMaps.Entry | undefined;
        get sound(): AudioCampaignEnvironmentTreeSounds.Entry | undefined;
    }
}
export default AudioCampaignEnvironmentTreeSoundAssignments;
