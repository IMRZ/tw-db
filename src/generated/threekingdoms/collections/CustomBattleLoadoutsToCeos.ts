
import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleLoadouts } from "./CustomBattleLoadouts";
import { Ceos } from "./Ceos";

export namespace CustomBattleLoadoutsToCeos {
  export const KEY = new CollectionKey("custom_battle_loadouts_to_ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _loadout: string;
    readonly _ceo: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._loadout = values["loadout"];
      this._ceo = values["ceo"];
    }
    
    get loadout(): CustomBattleLoadouts.Entry | undefined {
      const collection = <CustomBattleLoadouts.Entry[]>this.collectionCache.getCollection(CustomBattleLoadouts.KEY, CustomBattleLoadouts.Entry);
      return collection.find(entry => entry.key === this._loadout);
    }
    
    get ceo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._ceo);
    }
  }
}

export default CustomBattleLoadoutsToCeos;
