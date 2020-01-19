import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignMaps } from "./CampaignMaps";
export declare namespace AudioCampaignMaps {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _key: string;
        readonly listenerScalingFactor: number;
        readonly reverbDefault: string;
        readonly reverbUnderground: string;
        constructor(collectionCache: CollectionCache, values: any);
        get key(): CampaignMaps.Entry | undefined;
    }
}
export default AudioCampaignMaps;
