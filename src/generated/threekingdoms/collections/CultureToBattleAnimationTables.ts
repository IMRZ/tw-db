
import { CollectionCache, CollectionKey } from "../../../common";
import { Cultures } from "./Cultures";
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
    
    get culturePack(): Cultures.Entry | undefined {
      const collection = <Cultures.Entry[]>this.collectionCache.getCollection(Cultures.KEY, Cultures.Entry);
      return collection.find(entry => entry.key === this._culturePack);
    }
    
    get battleAnimationsTable(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._battleAnimationsTable);
    }
  }
}

export default CultureToBattleAnimationTables;
