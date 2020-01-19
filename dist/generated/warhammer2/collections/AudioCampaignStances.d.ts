import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStances } from "./CampaignStances";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Factions } from "./Factions";
export declare namespace AudioCampaignStances {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _stance: string;
        readonly uiSoundEvent: string;
        readonly enterEvent: string;
        readonly leaveEvent: string;
        readonly _subcultureRecord: string;
        readonly _factionRecord: string;
        readonly _overridingVoStance: string;
        constructor(collectionCache: CollectionCache, values: any);
        get stance(): CampaignStances.Entry | undefined;
        get subcultureRecord(): CulturesSubcultures.Entry | undefined;
        get factionRecord(): Factions.Entry | undefined;
        get overridingVoStance(): CampaignStances.Entry | undefined;
    }
}
export default AudioCampaignStances;
