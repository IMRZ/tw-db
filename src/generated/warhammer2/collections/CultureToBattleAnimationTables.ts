
import { CollectionCache, CollectionKey } from "../../../common";
import { CulturePackIds } from "./CulturePackIds";
import { BattleAnimationsTable } from "./BattleAnimationsTable";

export namespace CultureToBattleAnimationTables {
  export const KEY = new CollectionKey("culture_to_battle_animation_tables");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _culturePack: string;
    readonly _battleAnimationsTable: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._culturePack = values["culture_pack"];
      this._battleAnimationsTable = values["battle_animations_table"];
    }
    
    get culturePack(): CulturePackIds.Entry | undefined {
      const collection = <CulturePackIds.Entry[]>this.collectionCache.getCollection(CulturePackIds.KEY, CulturePackIds.Entry);
      return collection.find(entry => entry.id === this._culturePack);
    }
    
    get battleAnimationsTable(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._battleAnimationsTable);
    }
  }
}

export default CultureToBattleAnimationTables;
