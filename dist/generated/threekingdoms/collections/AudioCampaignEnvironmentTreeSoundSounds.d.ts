import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignEnvironmentTreeSounds } from "./AudioCampaignEnvironmentTreeSounds";
import { AudioCampaignEnvironmentLoopingSounds } from "./AudioCampaignEnvironmentLoopingSounds";
export declare namespace AudioCampaignEnvironmentTreeSoundSounds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _treeSound: string;
        readonly is3D: boolean;
        readonly _loopingSound: string;
        constructor(collectionCache: CollectionCache, values: any);
        get treeSound(): AudioCampaignEnvironmentTreeSounds.Entry | undefined;
        get loopingSound(): AudioCampaignEnvironmentLoopingSounds.Entry | undefined;
    }
}
export default AudioCampaignEnvironmentTreeSoundSounds;
