
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAnimationsTable } from "./BattleAnimationsTable";
import { BattleEntities } from "./BattleEntities";
import { UnitArmourTypes } from "./UnitArmourTypes";
import { Variants } from "./Variants";

export namespace Animals {
  export const KEY = new CollectionKey("animals");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _animation: string;
    readonly _entity: string;
    readonly meleeAttack: number;
    readonly meleeDefence: number;
    readonly chargeBonus: number;
    readonly _armour: string;
    readonly _variant: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._animation = values["animation"];
      this._entity = values["entity"];
      this.meleeAttack = values["melee_attack"];
      this.meleeDefence = values["melee_defence"];
      this.chargeBonus = values["charge_bonus"];
      this._armour = values["armour"];
      this._variant = values["variant"];
    }
    
    get animation(): BattleAnimationsTable.Entry | undefined {
      const collection = <BattleAnimationsTable.Entry[]>this.collectionCache.getCollection(BattleAnimationsTable.KEY, BattleAnimationsTable.Entry);
      return collection.find(entry => entry.key === this._animation);
    }
    
    get entity(): BattleEntities.Entry | undefined {
      const collection = <BattleEntities.Entry[]>this.collectionCache.getCollection(BattleEntities.KEY, BattleEntities.Entry);
      return collection.find(entry => entry.key === this._entity);
    }
    
    get armour(): UnitArmourTypes.Entry | undefined {
      const collection = <UnitArmourTypes.Entry[]>this.collectionCache.getCollection(UnitArmourTypes.KEY, UnitArmourTypes.Entry);
      return collection.find(entry => entry.key === this._armour);
    }
    
    get variant(): Variants.Entry | undefined {
      const collection = <Variants.Entry[]>this.collectionCache.getCollection(Variants.KEY, Variants.Entry);
      return collection.find(entry => entry.variantName === this._variant);
    }
  }
}

export default Animals;
