import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignMaps } from "./AudioCampaignMaps";
import { AudioCampaignEnvironmentGroundTypeSounds } from "./AudioCampaignEnvironmentGroundTypeSounds";
export declare namespace AudioCampaignEnvironmentGroundTypeSoundAssignments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _map: string;
        readonly _sound: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly map: AudioCampaignMaps.Entry | undefined;
        readonly sound: AudioCampaignEnvironmentGroundTypeSounds.Entry | undefined;
    }
}
export default AudioCampaignEnvironmentGroundTypeSoundAssignments;
