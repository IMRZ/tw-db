
import { CollectionCache, CollectionKey } from "../../../common";
import { PreBattleSpeechTypesEnum } from "./PreBattleSpeechTypesEnum";
import { PreBattleSpeechParametersEnum } from "./PreBattleSpeechParametersEnum";

export namespace PreBattleSpeeches {
  export const KEY = new CollectionKey("pre_battle_speeches");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly text: string;
    readonly _type: number;
    readonly _parameter: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.text = values["text"];
      this._type = values["type"];
      this._parameter = values["parameter"];
    }
    
    get type(): PreBattleSpeechTypesEnum.Entry | undefined {
      const collection = <PreBattleSpeechTypesEnum.Entry[]>this.collectionCache.getCollection(PreBattleSpeechTypesEnum.KEY, PreBattleSpeechTypesEnum.Entry);
      return collection.find(entry => entry.index === this._type);
    }
    
    get parameter(): PreBattleSpeechParametersEnum.Entry | undefined {
      const collection = <PreBattleSpeechParametersEnum.Entry[]>this.collectionCache.getCollection(PreBattleSpeechParametersEnum.KEY, PreBattleSpeechParametersEnum.Entry);
      return collection.find(entry => entry.key === this._parameter);
    }
  }
}

export default PreBattleSpeeches;
