
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitClass } from "./UnitClass";

export namespace BattleAutoresolverBalances {
  export const KEY = new CollectionKey("battle_autoresolver_balances");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _sourceUnitClass: string;
    readonly _targetUnitClass: string;
    readonly meleePotentialMultiplier: number;
    readonly missilePotentialMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._sourceUnitClass = values["source_unit_class"];
      this._targetUnitClass = values["target_unit_class"];
      this.meleePotentialMultiplier = values["melee_potential_multiplier"];
      this.missilePotentialMultiplier = values["missile_potential_multiplier"];
    }
    
    get sourceUnitClass(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._sourceUnitClass);
    }
    
    get targetUnitClass(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._targetUnitClass);
    }
  }
}

export default BattleAutoresolverBalances;
