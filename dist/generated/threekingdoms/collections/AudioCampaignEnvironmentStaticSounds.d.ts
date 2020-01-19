import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignMaps } from "./AudioCampaignMaps";
import { AudioCampaignEnvironmentLoopingSounds } from "./AudioCampaignEnvironmentLoopingSounds";
export declare namespace AudioCampaignEnvironmentStaticSounds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _map: string;
        readonly _loopingSound: string;
        constructor(collectionCache: CollectionCache, values: any);
        get map(): AudioCampaignMaps.Entry | undefined;
        get loopingSound(): AudioCampaignEnvironmentLoopingSounds.Entry | undefined;
    }
}
export default AudioCampaignEnvironmentStaticSounds;
