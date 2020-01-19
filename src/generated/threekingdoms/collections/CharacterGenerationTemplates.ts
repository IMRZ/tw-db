
import { CollectionCache, CollectionKey } from "../../../common";
import { Names } from "./Names";
import { CharacterGenerationSpawnAgeRanges } from "./CharacterGenerationSpawnAgeRanges";
import { CampaignCharacterArtSets } from "./CampaignCharacterArtSets";
import { AudioVoActorGroups } from "./AudioVoActorGroups";
import { CaiPersonalitiesCharacterSkillSelectionPolicies } from "./CaiPersonalitiesCharacterSkillSelectionPolicies";

export namespace CharacterGenerationTemplates {
  export const KEY = new CollectionKey("character_generation_templates");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._forename = values["forename"];
      this._familyName = values["family_name"];
      this._clanName = values["clan_name"];
      this._otherName = values["other_name"];
      this.weight = values["weight"];
      this._spawnAgeRange = values["spawn_age_range"];
      this.minSpawnRound = values["min_spawn_round"];
      this.maxSpawnRound = values["max_spawn_round"];
      this.unique = !!values["unique"];
      this._artSetOverride = values["art_set_override"];
      this.isMale = !!values["is_male"];
      this._voiceoverActor = values["voiceover_actor"];
      this.minRoundsToStayInAPool = values["min_rounds_to_stay_in_a_pool"];
      this.maxRoundsToStayInAPool = values["max_rounds_to_stay_in_a_pool"];
      this.maxRoundsInAllPoolsBeforeDestroyed = values["max_rounds_in_all_pools_before_destroyed"];
      this.canBeBorn = !!values["can_be_born"];
      this._aiSkillGeneration = values["ai_skill_generation"];
    }
    
    get forename(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._forename);
    }
    
    get familyName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._familyName);
    }
    
    get clanName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._clanName);
    }
    
    get otherName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._otherName);
    }
    
    get spawnAgeRange(): CharacterGenerationSpawnAgeRanges.Entry | undefined {
      const collection = <CharacterGenerationSpawnAgeRanges.Entry[]>this.collectionCache.getCollection(CharacterGenerationSpawnAgeRanges.KEY, CharacterGenerationSpawnAgeRanges.Entry);
      return collection.find(entry => entry.key === this._spawnAgeRange);
    }
    
    get artSetOverride(): CampaignCharacterArtSets.Entry | undefined {
      const collection = <CampaignCharacterArtSets.Entry[]>this.collectionCache.getCollection(CampaignCharacterArtSets.KEY, CampaignCharacterArtSets.Entry);
      return collection.find(entry => entry.artSetId === this._artSetOverride);
    }
    
    get voiceoverActor(): AudioVoActorGroups.Entry | undefined {
      const collection = <AudioVoActorGroups.Entry[]>this.collectionCache.getCollection(AudioVoActorGroups.KEY, AudioVoActorGroups.Entry);
      return collection.find(entry => entry.key === this._voiceoverActor);
    }
    
    get aiSkillGeneration(): CaiPersonalitiesCharacterSkillSelectionPolicies.Entry | undefined {
      const collection = <CaiPersonalitiesCharacterSkillSelectionPolicies.Entry[]>this.collectionCache.getCollection(CaiPersonalitiesCharacterSkillSelectionPolicies.KEY, CaiPersonalitiesCharacterSkillSelectionPolicies.Entry);
      return collection.find(entry => entry.key === this._aiSkillGeneration);
    }
  }
}

export default CharacterGenerationTemplates;
