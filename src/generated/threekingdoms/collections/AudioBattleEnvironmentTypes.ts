
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioBattleEnvironmentTypes {
  export const KEY = new CollectionKey("audio_battle_environment_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
    }
    
  }
}

export default AudioBattleEnvironmentTypes;
