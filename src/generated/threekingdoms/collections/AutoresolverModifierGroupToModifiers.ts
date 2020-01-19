
import { CollectionCache, CollectionKey } from "../../../common";
import { AutoresolverModifierGroupKeys } from "./AutoresolverModifierGroupKeys";
import { AutoresolverModifierTargets } from "./AutoresolverModifierTargets";
import { AutoresolverModifierBonusTypes } from "./AutoresolverModifierBonusTypes";

export namespace AutoresolverModifierGroupToModifiers {
  export const KEY = new CollectionKey("autoresolver_modifier_group_to_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _modifierTarget: string;
    readonly _modifierBonus: string;
    readonly value: number;
    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._modifierTarget = values["modifier_target"];
      this._modifierBonus = values["modifier_bonus"];
      this.value = values["value"];
      this.id = values["id"];
    }
    
    get group(): AutoresolverModifierGroupKeys.Entry | undefined {
      const collection = <AutoresolverModifierGroupKeys.Entry[]>this.collectionCache.getCollection(AutoresolverModifierGroupKeys.KEY, AutoresolverModifierGroupKeys.Entry);
      return collection.find(entry => entry.groupKey === this._group);
    }
    
    get modifierTarget(): AutoresolverModifierTargets.Entry | undefined {
      const collection = <AutoresolverModifierTargets.Entry[]>this.collectionCache.getCollection(AutoresolverModifierTargets.KEY, AutoresolverModifierTargets.Entry);
      return collection.find(entry => entry.key === this._modifierTarget);
    }
    
    get modifierBonus(): AutoresolverModifierBonusTypes.Entry | undefined {
      const collection = <AutoresolverModifierBonusTypes.Entry[]>this.collectionCache.getCollection(AutoresolverModifierBonusTypes.KEY, AutoresolverModifierBonusTypes.Entry);
      return collection.find(entry => entry.key === this._modifierBonus);
    }
  }
}

export default AutoresolverModifierGroupToModifiers;
