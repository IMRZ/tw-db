
import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { GameModes } from "./GameModes";
import { Retinues } from "./Retinues";
import { CeoInitialDatas } from "./CeoInitialDatas";
import { CharacterDeathDistributions } from "./CharacterDeathDistributions";
import { ExperienceRankToEffectsSets } from "./ExperienceRankToEffectsSets";
import { CharacterAttributeSets } from "./CharacterAttributeSets";
import { CharacterSkillNodeSets } from "./CharacterSkillNodeSets";

export namespace CharacterGenerationTemplateGameModeDetails {
  export const KEY = new CollectionKey("character_generation_template_game_mode_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _characterGenerationTemplate: string;
    readonly _gameMode: string;
    readonly _retinue: string;
    readonly _initialCeos: string;
    readonly _deathDistributionCurve: string;
    readonly minRank: number;
    readonly maxRank: number;
    readonly _experienceRankEffects: string;
    readonly _attributeSet: string;
    readonly _skillSetOverride: string;
    readonly initialLives: number;
    readonly undercoverCharacterChanceMultiplier: number;
    readonly isDeployable: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._characterGenerationTemplate = values["character_generation_template"];
      this._gameMode = values["game_mode"];
      this._retinue = values["retinue"];
      this._initialCeos = values["initial_ceos"];
      this._deathDistributionCurve = values["death_distribution_curve"];
      this.minRank = values["min_rank"];
      this.maxRank = values["max_rank"];
      this._experienceRankEffects = values["experience_rank_effects"];
      this._attributeSet = values["attribute_set"];
      this._skillSetOverride = values["skill_set_override"];
      this.initialLives = values["initial_lives"];
      this.undercoverCharacterChanceMultiplier = values["undercover_character_chance_multiplier"];
      this.isDeployable = !!values["is_deployable"];
    }
    
    get characterGenerationTemplate(): CharacterGenerationTemplates.Entry | undefined {
      const collection = <CharacterGenerationTemplates.Entry[]>this.collectionCache.getCollection(CharacterGenerationTemplates.KEY, CharacterGenerationTemplates.Entry);
      return collection.find(entry => entry.key === this._characterGenerationTemplate);
    }
    
    get gameMode(): GameModes.Entry | undefined {
      const collection = <GameModes.Entry[]>this.collectionCache.getCollection(GameModes.KEY, GameModes.Entry);
      return collection.find(entry => entry.key === this._gameMode);
    }
    
    get retinue(): Retinues.Entry | undefined {
      const collection = <Retinues.Entry[]>this.collectionCache.getCollection(Retinues.KEY, Retinues.Entry);
      return collection.find(entry => entry.key === this._retinue);
    }
    
    get initialCeos(): CeoInitialDatas.Entry | undefined {
      const collection = <CeoInitialDatas.Entry[]>this.collectionCache.getCollection(CeoInitialDatas.KEY, CeoInitialDatas.Entry);
      return collection.find(entry => entry.key === this._initialCeos);
    }
    
    get deathDistributionCurve(): CharacterDeathDistributions.Entry | undefined {
      const collection = <CharacterDeathDistributions.Entry[]>this.collectionCache.getCollection(CharacterDeathDistributions.KEY, CharacterDeathDistributions.Entry);
      return collection.find(entry => entry.key === this._deathDistributionCurve);
    }
    
    get experienceRankEffects(): ExperienceRankToEffectsSets.Entry | undefined {
      const collection = <ExperienceRankToEffectsSets.Entry[]>this.collectionCache.getCollection(ExperienceRankToEffectsSets.KEY, ExperienceRankToEffectsSets.Entry);
      return collection.find(entry => entry.setName === this._experienceRankEffects);
    }
    
    get attributeSet(): CharacterAttributeSets.Entry | undefined {
      const collection = <CharacterAttributeSets.Entry[]>this.collectionCache.getCollection(CharacterAttributeSets.KEY, CharacterAttributeSets.Entry);
      return collection.find(entry => entry.setName === this._attributeSet);
    }
    
    get skillSetOverride(): CharacterSkillNodeSets.Entry | undefined {
      const collection = <CharacterSkillNodeSets.Entry[]>this.collectionCache.getCollection(CharacterSkillNodeSets.KEY, CharacterSkillNodeSets.Entry);
      return collection.find(entry => entry.key === this._skillSetOverride);
    }
  }
}

export default CharacterGenerationTemplateGameModeDetails;
