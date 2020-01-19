
import { CollectionCache, CollectionKey } from "../../../common";


export namespace PreBattleSpeechTypesEnum {
  export const KEY = new CollectionKey("pre_battle_speech_types_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly index: number;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.index = values["index"];
      this.description = values["description"];
    }
    
  }
}

export default PreBattleSpeechTypesEnum;
