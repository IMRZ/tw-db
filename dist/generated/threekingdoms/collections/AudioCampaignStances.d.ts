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
        readonly reverb: boolean;
        readonly obstruction: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get stance(): CampaignStances.Entry | undefined;
    }
}
export default AudioCampaignStances;
