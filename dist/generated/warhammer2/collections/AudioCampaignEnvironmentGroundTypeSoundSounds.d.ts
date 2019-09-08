import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignEnvironmentGroundTypeSounds } from "./AudioCampaignEnvironmentGroundTypeSounds";
import { AudioCampaignEnvironmentLoopingSounds } from "./AudioCampaignEnvironmentLoopingSounds";
export declare namespace AudioCampaignEnvironmentGroundTypeSoundSounds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _sound: string;
        readonly is3D: boolean;
        readonly _loopingSound: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly sound: AudioCampaignEnvironmentGroundTypeSounds.Entry | undefined;
        readonly loopingSound: AudioCampaignEnvironmentLoopingSounds.Entry | undefined;
    }
}
export default AudioCampaignEnvironmentGroundTypeSoundSounds;
