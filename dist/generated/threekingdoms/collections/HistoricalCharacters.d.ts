import { CollectionCache, CollectionKey } from "../../../common";
import { Genders } from "./Genders";
import { Agents } from "./Agents";
import { Factions } from "./Factions";
import { Names } from "./Names";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { Retinues } from "./Retinues";
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
        readonly _retinue: string;
        constructor(collectionCache: CollectionCache, values: any);
        get gender(): Genders.Entry | undefined;
        get agentType(): Agents.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get nameKey(): Names.Entry | undefined;
        get surnameKey(): Names.Entry | undefined;
        get artSetId(): CampaignCharacterArtSets.Entry | undefined;
        get clanNameKey(): Names.Entry | undefined;
        get otherNameKey(): Names.Entry | undefined;
        get retinue(): Retinues.Entry | undefined;
    }
}
export default HistoricalCharacters;
