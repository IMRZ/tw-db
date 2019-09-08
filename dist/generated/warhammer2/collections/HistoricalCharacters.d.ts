import { CollectionCache, CollectionKey } from "../../../common";
import { Genders } from "./Genders";
import { Agents } from "./Agents";
import { Factions } from "./Factions";
import { Names } from "./Names";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
export declare namespace HistoricalCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _gender: string;
        readonly _agentType: string;
        readonly _faction: string;
        readonly spawningWindowStart: number;
        readonly spawningWindowEnd: number;
        readonly _nameKey: number;
        readonly _surnameKey: number;
        readonly _artSetId: string;
        readonly _clanNameKey: number;
        readonly _otherNameKey: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly gender: Genders.Entry | undefined;
        readonly agentType: Agents.Entry | undefined;
        readonly faction: Factions.Entry | undefined;
        readonly nameKey: Names.Entry | undefined;
        readonly surnameKey: Names.Entry | undefined;
        readonly artSetId: CampaignCharacterArtSets.Entry | undefined;
        readonly clanNameKey: Names.Entry | undefined;
        readonly otherNameKey: Names.Entry | undefined;
    }
}
export default HistoricalCharacters;
