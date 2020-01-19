
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";

export namespace BattleAnimationsTableAllowedCombinations {
  export const KEY = new CollectionKey("battle_animations_table_allowed_combinations");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _baseAnimation: string;
    readonly _additionalAnimation: string;
    readonly _secondaryWeaponAnimation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._baseAnimation = values["base_animation"];
      this._additionalAnimation = values["additional_animation"];
      this._secondaryWeaponAnimation = values["secondary_weapon_animation"];
    }
    
    get baseAnimation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._baseAnimation);
    }
    
    get additionalAnimation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._additionalAnimation);
    }
    
    get secondaryWeaponAnimation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._secondaryWeaponAnimation);
    }
  }
}

export default BattleAnimationsTableAllowedCombinations;
