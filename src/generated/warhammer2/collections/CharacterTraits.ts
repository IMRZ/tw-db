
import { CollectionCache, CollectionKey } from "../../../common";
import { TraitInfo } from "./TraitInfo";
import { TraitCategories } from "./TraitCategories";
import { PreBattleSpeechParametersEnum } from "./PreBattleSpeechParametersEnum";

export namespace CharacterTraits {
  export const KEY = new CollectionKey("character_traits");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly noGoingBackLevel: number;
    readonly hidden: boolean;
    readonly precedence: number;
    readonly _icon: string;
    readonly author: string;
    readonly comment: string;
    readonly _preBattleSpeechParameter: string;
    readonly uiPriority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this.noGoingBackLevel = values["no_going_back_level"];
      this.hidden = !!values["hidden"];
      this.precedence = values["precedence"];
      this._icon = values["icon"];
      this.author = values["author"];
      this.comment = values["comment"];
      this._preBattleSpeechParameter = values["pre_battle_speech_parameter"];
      this.uiPriority = values["ui_priority"];
    }
    
    get key(): TraitInfo.Entry | undefined {
      const collection = <TraitInfo.Entry[]>this.collectionCache.getCollection(TraitInfo.KEY, TraitInfo.Entry);
      return collection.find(entry => entry.trait === this._key);
    }
    
    get icon(): TraitCategories.Entry | undefined {
      const collection = <TraitCategories.Entry[]>this.collectionCache.getCollection(TraitCategories.KEY, TraitCategories.Entry);
      return collection.find(entry => entry.category === this._icon);
    }
    
    get preBattleSpeechParameter(): PreBattleSpeechParametersEnum.Entry | undefined {
      const collection = <PreBattleSpeechParametersEnum.Entry[]>this.collectionCache.getCollection(PreBattleSpeechParametersEnum.KEY, PreBattleSpeechParametersEnum.Entry);
      return collection.find(entry => entry.key === this._preBattleSpeechParameter);
    }
  }
}

export default CharacterTraits;
