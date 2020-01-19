import { CollectionCache, CollectionKey } from "../../../common";
import { AudioCampaignEnvironments } from "./AudioCampaignEnvironments";
import { AudioCampaignEnvironmentReverbTypes } from "./AudioCampaignEnvironmentReverbTypes";
import { AudioCampaignEnvironmentReverbs } from "./AudioCampaignEnvironmentReverbs";
export declare namespace AudioCampaignEnvironmentReverbJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _environment: string;
        readonly _type: string;
        readonly _reverb: string;
        constructor(collectionCache: CollectionCache, values: any);
        get environment(): AudioCampaignEnvironments.Entry | undefined;
        get type(): AudioCampaignEnvironmentReverbTypes.Entry | undefined;
        get reverb(): AudioCampaignEnvironmentReverbs.Entry | undefined;
    }
}
export default AudioCampaignEnvironmentReverbJunctions;
