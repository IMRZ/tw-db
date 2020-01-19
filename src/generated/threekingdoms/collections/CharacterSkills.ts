
import { CollectionCache, CollectionKey } from "../../../common";
import { PreBattleSpeechParametersEnum } from "./PreBattleSpeechParametersEnum";

export namespace CharacterSkills {
  export const KEY = new CollectionKey("character_skills");

  export class Entry {
    private readonly collectionCache: CollectionCache;

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

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.imagePath = values["image_path"];
      this.localisedName = values["localised_name"];
      this.localisedDescription = values["localised_description"];
      this._preBattleSpeechParameter = values["pre_battle_speech_parameter"];
      this.unlockedAtRank = values["unlocked_at_rank"];
      this.isBackgroundSkill = !!values["is_background_skill"];
      this.isFemaleOnlyBackgroundSkill = !!values["is_female_only_background_skill"];
      this.isMaleOnlyBackgroundSkill = !!values["is_male_only_background_skill"];
      this.backgroundWeighting = values["background_weighting"];
    }
    
    get preBattleSpeechParameter(): PreBattleSpeechParametersEnum.Entry | undefined {
      const collection = <PreBattleSpeechParametersEnum.Entry[]>this.collectionCache.getCollection(PreBattleSpeechParametersEnum.KEY, PreBattleSpeechParametersEnum.Entry);
      return collection.find(entry => entry.key === this._preBattleSpeechParameter);
    }
  }
}

export default CharacterSkills;
