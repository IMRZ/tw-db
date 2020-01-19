
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioBattleEnvironmentReverbTypes {
  export const KEY = new CollectionKey("audio_battle_environment_reverb_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default AudioBattleEnvironmentReverbTypes;
