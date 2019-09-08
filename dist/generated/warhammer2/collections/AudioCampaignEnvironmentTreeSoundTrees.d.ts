import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignEnvironmentTreeSounds } from "./AudioCampaignEnvironmentTreeSounds";
import { AudioCampaignTreeTypes } from "./AudioCampaignTreeTypes";
export declare namespace AudioCampaignEnvironmentTreeSoundTrees {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _sound: string;
        readonly _tree: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly sound: AudioCampaignEnvironmentTreeSounds.Entry | undefined;
        readonly tree: AudioCampaignTreeTypes.Entry | undefined;
    }
}
export default AudioCampaignEnvironmentTreeSoundTrees;
