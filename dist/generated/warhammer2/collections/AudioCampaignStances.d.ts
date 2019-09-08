import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";
export declare namespace AudioCampaignStances {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stance: string;
        readonly uiSoundEvent: string;
        readonly enterEvent: string;
        readonly leaveEvent: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly stance: CampaignStances.Entry | undefined;
    }
}
export default AudioCampaignStances;
