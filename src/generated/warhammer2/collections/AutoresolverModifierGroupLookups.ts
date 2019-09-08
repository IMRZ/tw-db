
import { CollectionCache, CollectionKey } from "../../../common";
import { AutoresolverBattleTypes } from "./AutoresolverBattleTypes";
import { AutoresolverPlayerTypes } from "./AutoresolverPlayerTypes";
import { AutoresolverModifierGroupKeys } from "./AutoresolverModifierGroupKeys";
import { AutoresolverModifierMultiplierMechanicEnums } from "./AutoresolverModifierMultiplierMechanicEnums";

export namespace AutoresolverModifierGroupLookups {
  export const KEY = new CollectionKey("autoresolver_modifier_group_lookups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _battleType: string;
    readonly _playerType: string;
    readonly _modifierGroupApplied: string;
    readonly _modifierValueMultiplierMechanic: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._battleType = values["battle_type"];
      this._playerType = values["player_type"];
      this._modifierGroupApplied = values["modifier_group_applied"];
      this._modifierValueMultiplierMechanic = values["modifier_value_multiplier_mechanic"];
    }
    
    get battleType(): AutoresolverBattleTypes.Entry | undefined {
      const collection = <AutoresolverBattleTypes.Entry[]>this.collectionCache.getCollection(AutoresolverBattleTypes.KEY, AutoresolverBattleTypes.Entry);
      return collection.find(entry => entry.key === this._battleType);
    }
    
    get playerType(): AutoresolverPlayerTypes.Entry | undefined {
      const collection = <AutoresolverPlayerTypes.Entry[]>this.collectionCache.getCollection(AutoresolverPlayerTypes.KEY, AutoresolverPlayerTypes.Entry);
      return collection.find(entry => entry.key === this._playerType);
    }
    
    get modifierGroupApplied(): AutoresolverModifierGroupKeys.Entry | undefined {
      const collection = <AutoresolverModifierGroupKeys.Entry[]>this.collectionCache.getCollection(AutoresolverModifierGroupKeys.KEY, AutoresolverModifierGroupKeys.Entry);
      return collection.find(entry => entry.groupKey === this._modifierGroupApplied);
    }
    
    get modifierValueMultiplierMechanic(): AutoresolverModifierMultiplierMechanicEnums.Entry | undefined {
      const collection = <AutoresolverModifierMultiplierMechanicEnums.Entry[]>this.collectionCache.getCollection(AutoresolverModifierMultiplierMechanicEnums.KEY, AutoresolverModifierMultiplierMechanicEnums.Entry);
      return collection.find(entry => entry.key === this._modifierValueMultiplierMechanic);
    }
  }
}

export default AutoresolverModifierGroupLookups;
