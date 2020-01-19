
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PreBattleSpeechParametersEnum {
  export const KEY = new CollectionKey("pre_battle_speech_parameters_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default PreBattleSpeechParametersEnum;
