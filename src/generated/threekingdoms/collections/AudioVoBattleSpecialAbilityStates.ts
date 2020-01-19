
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioVoBattleSpecialAbilityStates {
  export const KEY = new CollectionKey("audio_vo_battle_special_ability_states");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AudioVoBattleSpecialAbilityStates;
