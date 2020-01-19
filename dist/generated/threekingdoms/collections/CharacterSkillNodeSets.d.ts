import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Campaigns } from "./Campaigns";
import { Agents } from "./Agents";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { AgentSubtypes } from "./AgentSubtypes";
import { GameModes } from "./GameModes";
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
        readonly _agentSubtypeKey: string;
        readonly _gameMode: string;
        constructor(collectionCache: CollectionCache, values: any);
        get factionKey(): Factions.Entry | undefined;
        get campaignKey(): Campaigns.Entry | undefined;
        get agentKey(): Agents.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
        get agentSubtypeKey(): AgentSubtypes.Entry | undefined;
        get gameMode(): GameModes.Entry | undefined;
    }
}
export default CharacterSkillNodeSets;
