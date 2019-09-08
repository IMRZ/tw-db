
import { CollectionCache, CollectionKey } from "../../../common";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";
import { UnitSpecialAbilities } from "./UnitSpecialAbilities";

export namespace SpecialAbilityToAutoDeactivateFlags {
  export const KEY = new CollectionKey("special_ability_to_auto_deactivate_flags");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _invalidUsageFlag: string;
    readonly _specialAbilityKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._invalidUsageFlag = values["invalid_usage_flag"];
      this._specialAbilityKey = values["special_ability_key"];
    }
    
    get invalidUsageFlag(): SpecialAbilityInvalidUsageFlags.Entry | undefined {
      const collection = <SpecialAbilityInvalidUsageFlags.Entry[]>this.collectionCache.getCollection(SpecialAbilityInvalidUsageFlags.KEY, SpecialAbilityInvalidUsageFlags.Entry);
      return collection.find(entry => entry.flagKey === this._invalidUsageFlag);
    }
    
    get specialAbilityKey(): UnitSpecialAbilities.Entry | undefined {
      const collection = <UnitSpecialAbilities.Entry[]>this.collectionCache.getCollection(UnitSpecialAbilities.KEY, UnitSpecialAbilities.Entry);
      return collection.find(entry => entry._key === this._specialAbilityKey);
    }
  }
}

export default SpecialAbilityToAutoDeactivateFlags;
