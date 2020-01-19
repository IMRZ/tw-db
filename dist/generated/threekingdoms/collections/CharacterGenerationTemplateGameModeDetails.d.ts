import { CollectionCache, CollectionKey } from "../../../common";
import { CharacterGenerationTemplates } from "./CharacterGenerationTemplates";
import { GameModes } from "./GameModes";
import { Retinues } from "./Retinues";
import { CeoInitialDatas } from "./CeoInitialDatas";
import { CharacterDeathDistributions } from "./CharacterDeathDistributions";
import { ExperienceRankToEffectsSets } from "./ExperienceRankToEffectsSets";
import { CharacterAttributeSets } from "./CharacterAttributeSets";
import { CharacterSkillNodeSets } from "./CharacterSkillNodeSets";
export declare namespace CharacterGenerationTemplateGameModeDetails {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        get characterGenerationTemplate(): CharacterGenerationTemplates.Entry | undefined;
        get gameMode(): GameModes.Entry | undefined;
        get retinue(): Retinues.Entry | undefined;
        get initialCeos(): CeoInitialDatas.Entry | undefined;
        get deathDistributionCurve(): CharacterDeathDistributions.Entry | undefined;
        get experienceRankEffects(): ExperienceRankToEffectsSets.Entry | undefined;
        get attributeSet(): CharacterAttributeSets.Entry | undefined;
        get skillSetOverride(): CharacterSkillNodeSets.Entry | undefined;
    }
}
export default CharacterGenerationTemplateGameModeDetails;
