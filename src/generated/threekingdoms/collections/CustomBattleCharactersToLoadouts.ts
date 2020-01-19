
import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleCharacters } from "./CustomBattleCharacters";
import { CustomBattleLoadouts } from "./CustomBattleLoadouts";

export namespace CustomBattleCharactersToLoadouts {
  export const KEY = new CollectionKey("custom_battle_characters_to_loadouts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _character: string;
    readonly _loadout: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._character = values["character"];
      this._loadout = values["loadout"];
    }
    
    get character(): CustomBattleCharacters.Entry | undefined {
      const collection = <CustomBattleCharacters.Entry[]>this.collectionCache.getCollection(CustomBattleCharacters.KEY, CustomBattleCharacters.Entry);
      return collection.find(entry => entry._character === this._character);
    }
    
    get loadout(): CustomBattleLoadouts.Entry | undefined {
      const collection = <CustomBattleLoadouts.Entry[]>this.collectionCache.getCollection(CustomBattleLoadouts.KEY, CustomBattleLoadouts.Entry);
      return collection.find(entry => entry.key === this._loadout);
    }
  }
}

export default CustomBattleCharactersToLoadouts;
