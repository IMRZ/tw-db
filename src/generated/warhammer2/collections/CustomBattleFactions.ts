
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";

export namespace CustomBattleFactions {
  export const KEY = new CollectionKey("custom_battle_factions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _factionKey: string;
    readonly sortOrder: number;
    readonly cultureSortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._factionKey = values["faction_key"];
      this.sortOrder = values["sort_order"];
      this.cultureSortOrder = values["culture_sort_order"];
    }
    
    get factionKey(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._factionKey);
    }
  }
}

export default CustomBattleFactions;
