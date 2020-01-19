
import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleLoadouts } from "./CustomBattleLoadouts";
import { CustomBattleUnitSets } from "./CustomBattleUnitSets";

export namespace CustomBattleLoadoutsToUnitSets {
  export const KEY = new CollectionKey("custom_battle_loadouts_to_unit_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _loadout: string;
    readonly _unitSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._loadout = values["loadout"];
      this._unitSet = values["unit_set"];
    }
    
    get loadout(): CustomBattleLoadouts.Entry | undefined {
      const collection = <CustomBattleLoadouts.Entry[]>this.collectionCache.getCollection(CustomBattleLoadouts.KEY, CustomBattleLoadouts.Entry);
      return collection.find(entry => entry.key === this._loadout);
    }
    
    get unitSet(): CustomBattleUnitSets.Entry | undefined {
      const collection = <CustomBattleUnitSets.Entry[]>this.collectionCache.getCollection(CustomBattleUnitSets.KEY, CustomBattleUnitSets.Entry);
      return collection.find(entry => entry.key === this._unitSet);
    }
  }
}

export default CustomBattleLoadoutsToUnitSets;
