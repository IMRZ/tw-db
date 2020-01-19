
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalityTrespassingComponents {
  export const KEY = new CollectionKey("cai_personality_trespassing_components");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly unknownFactionModifier: number;
    readonly minScore: number;
    readonly minScoreHorde: number;
    readonly stanceModBestFriends: number;
    readonly stanceModVeryFriendly: number;
    readonly stanceModFriendly: number;
    readonly stanceModNeutral: number;
    readonly stanceModUnfriendly: number;
    readonly stanceModVeryUnfriendly: number;
    readonly stanceModBitterEnemies: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.unknownFactionModifier = values["unknown_faction_modifier"];
      this.minScore = values["min_score"];
      this.minScoreHorde = values["min_score_horde"];
      this.stanceModBestFriends = values["stance_mod_best_friends"];
      this.stanceModVeryFriendly = values["stance_mod_very_friendly"];
      this.stanceModFriendly = values["stance_mod_friendly"];
      this.stanceModNeutral = values["stance_mod_neutral"];
      this.stanceModUnfriendly = values["stance_mod_unfriendly"];
      this.stanceModVeryUnfriendly = values["stance_mod_very_unfriendly"];
      this.stanceModBitterEnemies = values["stance_mod_bitter_enemies"];
    }
    
  }
}

export default CaiPersonalityTrespassingComponents;
