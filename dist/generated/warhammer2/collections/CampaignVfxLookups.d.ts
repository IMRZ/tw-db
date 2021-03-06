import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignVfxCampaignVfxEventIds } from "./CampaignVfxCampaignVfxEventIds";
import { CampaignVfxDescriptions } from "./CampaignVfxDescriptions";
import { Factions } from "./Factions";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { Agents } from "./Agents";
export declare namespace CampaignVfxLookups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _vfxEvent: string;
        readonly _vfxDescription: string;
        readonly _factionFilter: string;
        readonly _cultureFilter: string;
        readonly _agentFilter: string;
        constructor(collectionCache: CollectionCache, values: any);
        get vfxEvent(): CampaignVfxCampaignVfxEventIds.Entry | undefined;
        get vfxDescription(): CampaignVfxDescriptions.Entry | undefined;
        get factionFilter(): Factions.Entry | undefined;
        get cultureFilter(): CulturesSubcultures.Entry | undefined;
        get agentFilter(): Agents.Entry | undefined;
    }
}
export default CampaignVfxLookups;
