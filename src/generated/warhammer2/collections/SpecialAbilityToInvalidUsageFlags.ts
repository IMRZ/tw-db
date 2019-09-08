
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";

export namespace SpecialAbilityToInvalidUsageFlags {
  export const KEY = new CollectionKey("special_ability_to_invalid_usage_flags");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _specialAbility: string;
    readonly _invalidUsageFlag: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._specialAbility = values["special_ability"];
      this._invalidUsageFlag = values["invalid_usage_flag"];
    }
    
    get specialAbility(): UnitSpecialAbilities.Entry | undefined {
      const collection = <UnitSpecialAbilities.Entry[]>this.collectionCache.getCollection(UnitSpecialAbilities.KEY, UnitSpecialAbilities.Entry);
      return collection.find(entry => entry._key === this._specialAbility);
    }
    
    get invalidUsageFlag(): SpecialAbilityInvalidUsageFlags.Entry | undefined {
      const collection = <SpecialAbilityInvalidUsageFlags.Entry[]>this.collectionCache.getCollection(SpecialAbilityInvalidUsageFlags.KEY, SpecialAbilityInvalidUsageFlags.Entry);
      return collection.find(entry => entry.flagKey === this._invalidUsageFlag);
    }
  }
}

export default SpecialAbilityToInvalidUsageFlags;
