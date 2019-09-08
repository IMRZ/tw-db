
import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitStats } from "./UiUnitStats";

export namespace BattleDifficultyModifiers {
  export const KEY = new CollectionKey("battle_difficulty_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly difficultyLevel: string;
    readonly human: boolean;
    readonly stat: string;
    readonly _value: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.difficultyLevel = values["difficulty_level"];
      this.human = !!values["human"];
      this.stat = values["stat"];
      this._value = values["value"];
    }
    
    get value(): UiUnitStats.Entry | undefined {
      const collection = <UiUnitStats.Entry[]>this.collectionCache.getCollection(UiUnitStats.KEY, UiUnitStats.Entry);
      return collection.find(entry => entry.key === this._value);
    }
  }
}

export default BattleDifficultyModifiers;
