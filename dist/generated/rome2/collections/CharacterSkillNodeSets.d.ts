import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { Agents } from "./Agents";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CharacterSkillNodeSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _factionKey: string;
        readonly _campaignKey: string;
        readonly _agentKey: string;
        readonly encTitle: string;
        readonly _subculture: string;
        readonly forArmy: boolean;
        readonly forNavy: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly factionKey: Factions.Entry | undefined;
        readonly campaignKey: Campaigns.Entry | undefined;
        readonly agentKey: Agents.Entry | undefined;
        readonly subculture: CulturesSubcultures.Entry | undefined;
    }
}
export default CharacterSkillNodeSets;
