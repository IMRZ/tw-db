import { CollectionCache, CollectionKey } from "../../../common";
import { PreBattleSpeechParametersEnum } from "./PreBattleSpeechParametersEnum";
export declare namespace CharacterSkills {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly imagePath: string;
        readonly localisedName: string;
        readonly localisedDescription: string;
        readonly _preBattleSpeechParameter: string;
        readonly unlockedAtRank: number;
        readonly isBackgroundSkill: boolean;
        readonly isFemaleOnlyBackgroundSkill: boolean;
        readonly isMaleOnlyBackgroundSkill: boolean;
        readonly backgroundWeighting: number;
        readonly influenceCost: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly preBattleSpeechParameter: PreBattleSpeechParametersEnum.Entry | undefined;
    }
}
export default CharacterSkills;
