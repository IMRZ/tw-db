import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Factions } from "./Factions";
import { Cultures } from "./Cultures";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace CampaignCharacterArtSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly artSetId: string;
        readonly isCustom: boolean;
        readonly _agentType: string;
        readonly _faction: string;
        readonly _culture: string;
        readonly _subculture: string;
        readonly isMale: boolean;
        readonly _agentSubtype: string;
        readonly campaignMapScale: number;
        constructor(collectionCache: CollectionCache, values: any);
        get agentType(): Agents.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get culture(): Cultures.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
    }
}
export default CampaignCharacterArtSets;
