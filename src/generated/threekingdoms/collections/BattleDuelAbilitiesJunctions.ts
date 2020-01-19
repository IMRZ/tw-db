
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitAbilities } from "./UnitAbilities";
import { BattleDuelAbilityTypeEnums } from "./BattleDuelAbilityTypeEnums";

export namespace BattleDuelAbilitiesJunctions {
  export const KEY = new CollectionKey("battle_duel_abilities_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _abilityKey: string;
    readonly _duelAbilityType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._abilityKey = values["ability_key"];
      this._duelAbilityType = values["duel_ability_type"];
    }
    
    get abilityKey(): UnitAbilities.Entry | undefined {
      const collection = <UnitAbilities.Entry[]>this.collectionCache.getCollection(UnitAbilities.KEY, UnitAbilities.Entry);
      return collection.find(entry => entry.key === this._abilityKey);
    }
    
    get duelAbilityType(): BattleDuelAbilityTypeEnums.Entry | undefined {
      const collection = <BattleDuelAbilityTypeEnums.Entry[]>this.collectionCache.getCollection(BattleDuelAbilityTypeEnums.KEY, BattleDuelAbilityTypeEnums.Entry);
      return collection.find(entry => entry.key === this._duelAbilityType);
    }
  }
}

export default BattleDuelAbilitiesJunctions;
