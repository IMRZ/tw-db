
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";

export namespace SpecialAbilityToInvalidTargetFlags {
  export const KEY = new CollectionKey("special_ability_to_invalid_target_flags");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _specialAbility: string;
    readonly _invalidTarget: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._specialAbility = values["special_ability"];
      this._invalidTarget = values["invalid_target"];
    }
    
    get specialAbility(): UnitSpecialAbilities.Entry | undefined {
      const collection = <UnitSpecialAbilities.Entry[]>this.collectionCache.getCollection(UnitSpecialAbilities.KEY, UnitSpecialAbilities.Entry);
      return collection.find(entry => entry._key === this._specialAbility);
    }
    
    get invalidTarget(): SpecialAbilityInvalidUsageFlags.Entry | undefined {
      const collection = <SpecialAbilityInvalidUsageFlags.Entry[]>this.collectionCache.getCollection(SpecialAbilityInvalidUsageFlags.KEY, SpecialAbilityInvalidUsageFlags.Entry);
      return collection.find(entry => entry.flagKey === this._invalidTarget);
    }
  }
}

export default SpecialAbilityToInvalidTargetFlags;
