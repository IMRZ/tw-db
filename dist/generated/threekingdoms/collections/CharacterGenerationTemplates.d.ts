import { CollectionCache, CollectionKey } from "../../../common";
import { Names } from "./Names";
import { CharacterGenerationSpawnAgeRanges } from "./CharacterGenerationSpawnAgeRanges";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { AudioVoActorGroups } from "./AudioVoActorGroups";
import { CaiPersonalitiesCharacterSkillSelectionPolicies } from "./CaiPersonalitiesCharacterSkillSelectionPolicies";
export declare namespace CharacterGenerationTemplates {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _forename: number;
        readonly _familyName: number;
        readonly _clanName: number;
        readonly _otherName: number;
        readonly weight: number;
        readonly _spawnAgeRange: string;
        readonly minSpawnRound: number;
        readonly maxSpawnRound: number;
        readonly unique: boolean;
        readonly _artSetOverride: string;
        readonly isMale: boolean;
        readonly _voiceoverActor: string;
        readonly minRoundsToStayInAPool: number;
        readonly maxRoundsToStayInAPool: number;
        readonly maxRoundsInAllPoolsBeforeDestroyed: number;
        readonly canBeBorn: boolean;
        readonly _aiSkillGeneration: string;
        constructor(collectionCache: CollectionCache, values: any);
        get forename(): Names.Entry | undefined;
        get familyName(): Names.Entry | undefined;
        get clanName(): Names.Entry | undefined;
        get otherName(): Names.Entry | undefined;
        get spawnAgeRange(): CharacterGenerationSpawnAgeRanges.Entry | undefined;
        get artSetOverride(): CampaignCharacterArtSets.Entry | undefined;
        get voiceoverActor(): AudioVoActorGroups.Entry | undefined;
        get aiSkillGeneration(): CaiPersonalitiesCharacterSkillSelectionPolicies.Entry | undefined;
    }
}
export default CharacterGenerationTemplates;
