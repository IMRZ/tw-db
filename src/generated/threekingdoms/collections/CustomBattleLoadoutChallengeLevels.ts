
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CustomBattleLoadoutChallengeLevels {
  export const KEY = new CollectionKey("custom_battle_loadout_challenge_levels");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly onscreenName: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.onscreenName = values["onscreen_name"];
    }
    
  }
}

export default CustomBattleLoadoutChallengeLevels;
