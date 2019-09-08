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
        readonly faction: Factions.Entry | undefined;
        readonly agentSubtype: AgentSubtypes.Entry | undefined;
        readonly name: Names.Entry | undefined;
        readonly surname: Names.Entry | undefined;
        readonly clanName: Names.Entry | undefined;
        readonly otherName: Names.Entry | undefined;
        readonly artset: CampaignCharacterArtSets.Entry | undefined;
    }
}
export default CampaignRogueArmyLeaders;
