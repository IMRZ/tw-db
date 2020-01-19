
import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleLoadoutChallengeLevels } from "./CustomBattleLoadoutChallengeLevels";

export namespace CustomBattleLoadouts {
  export const KEY = new CollectionKey("custom_battle_loadouts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly name: string;
    readonly description: string;
    readonly cost: number;
    readonly _challengeLevel: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.name = values["name"];
      this.description = values["description"];
      this.cost = values["cost"];
      this._challengeLevel = values["challenge_level"];
    }
    
    get challengeLevel(): CustomBattleLoadoutChallengeLevels.Entry | undefined {
      const collection = <CustomBattleLoadoutChallengeLevels.Entry[]>this.collectionCache.getCollection(CustomBattleLoadoutChallengeLevels.KEY, CustomBattleLoadoutChallengeLevels.Entry);
      return collection.find(entry => entry.key === this._challengeLevel);
    }
  }
}

export default CustomBattleLoadouts;
