import { CollectionCache, CollectionKey } from "../../../common";
import { Genders } from "./Genders";
import { Agents } from "./Agents";
import { Factions } from "./Factions";
import { Names } from "./Names";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { PoliticalParties } from "./PoliticalParties";
export declare namespace HistoricalCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly onScreenName: string;
        readonly nobility: boolean;
        readonly _gender: string;
        readonly _agentType: string;
        readonly _faction: string;
        readonly spawningWindowStart: number;
        readonly spawningWindowEnd: number;
        readonly spawnConditions: string;
        readonly _nameKey: number;
        readonly _surnameKey: number;
        readonly _artSetId: string;
        readonly _clanNameKey: number;
        readonly _otherNameKey: number;
        readonly _politicalParty: string;
        readonly ageStart: number;
        constructor(collectionCache: CollectionCache, values: any);
        get gender(): Genders.Entry | undefined;
        get agentType(): Agents.Entry | undefined;
        get faction(): Factions.Entry | undefined;
        get nameKey(): Names.Entry | undefined;
        get surnameKey(): Names.Entry | undefined;
        get artSetId(): CampaignCharacterArtSets.Entry | undefined;
        get clanNameKey(): Names.Entry | undefined;
        get otherNameKey(): Names.Entry | undefined;
        get politicalParty(): PoliticalParties.Entry | undefined;
    }
}
export default HistoricalCharacters;
