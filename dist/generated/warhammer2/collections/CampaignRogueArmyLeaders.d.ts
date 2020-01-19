import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { AgentSubtypes } from "./AgentSubtypes";
import { Names } from "./Names";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
export declare namespace CampaignRogueArmyLeaders {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _faction: string;
        readonly _agentSubtype: string;
        readonly isMale: boolean;
        readonly _name: number;
        readonly _surname: number;
        readonly _clanName: number;
        readonly _otherName: number;
        readonly _artset: string;
        readonly canNaturallySpawn: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get faction(): Factions.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
        get name(): Names.Entry | undefined;
        get surname(): Names.Entry | undefined;
        get clanName(): Names.Entry | undefined;
        get otherName(): Names.Entry | undefined;
        get artset(): CampaignCharacterArtSets.Entry | undefined;
    }
}
export default CampaignRogueArmyLeaders;
