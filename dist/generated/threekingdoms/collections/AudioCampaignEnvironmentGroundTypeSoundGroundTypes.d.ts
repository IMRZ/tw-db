import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignEnvironmentGroundTypeSounds } from "./AudioCampaignEnvironmentGroundTypeSounds";
import { CampaignGroundTypes } from "./CampaignGroundTypes";
export declare namespace AudioCampaignEnvironmentGroundTypeSoundGroundTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _sound: string;
        readonly _groundType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get sound(): AudioCampaignEnvironmentGroundTypeSounds.Entry | undefined;
        get groundType(): CampaignGroundTypes.Entry | undefined;
    }
}
export default AudioCampaignEnvironmentGroundTypeSoundGroundTypes;
