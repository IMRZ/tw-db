
import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleLoadouts } from "./CustomBattleLoadouts";
import { CharacterSkills } from "./CharacterSkills";

export namespace CustomBattleLoadoutsToSkills {
  export const KEY = new CollectionKey("custom_battle_loadouts_to_skills");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _loadout: string;
    readonly _skill: string;
    readonly level: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._loadout = values["loadout"];
      this._skill = values["skill"];
      this.level = values["level"];
    }
    
    get loadout(): CustomBattleLoadouts.Entry | undefined {
      const collection = <CustomBattleLoadouts.Entry[]>this.collectionCache.getCollection(CustomBattleLoadouts.KEY, CustomBattleLoadouts.Entry);
      return collection.find(entry => entry.key === this._loadout);
    }
    
    get skill(): CharacterSkills.Entry | undefined {
      const collection = <CharacterSkills.Entry[]>this.collectionCache.getCollection(CharacterSkills.KEY, CharacterSkills.Entry);
      return collection.find(entry => entry.key === this._skill);
    }
  }
}

export default CustomBattleLoadoutsToSkills;
