
import { CollectionCache, CollectionKey } from "../../../common";
import { DeployablesAbilities } from "./DeployablesAbilities";
import { SpecialAbilityInvalidUsageFlags } from "./SpecialAbilityInvalidUsageFlags";

export namespace DeployablesAbilityToInvalidUsageFlags {
  export const KEY = new CollectionKey("deployables_ability_to_invalid_usage_flags");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _deployablesAbility: string;
    readonly _invalidUsageFlag: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._deployablesAbility = values["deployables_ability"];
      this._invalidUsageFlag = values["invalid_usage_flag"];
    }
    
    get deployablesAbility(): DeployablesAbilities.Entry | undefined {
      const collection = <DeployablesAbilities.Entry[]>this.collectionCache.getCollection(DeployablesAbilities.KEY, DeployablesAbilities.Entry);
      return collection.find(entry => entry.abilityKey === this._deployablesAbility);
    }
    
    get invalidUsageFlag(): SpecialAbilityInvalidUsageFlags.Entry | undefined {
      const collection = <SpecialAbilityInvalidUsageFlags.Entry[]>this.collectionCache.getCollection(SpecialAbilityInvalidUsageFlags.KEY, SpecialAbilityInvalidUsageFlags.Entry);
      return collection.find(entry => entry.flagKey === this._invalidUsageFlag);
    }
  }
}

export default DeployablesAbilityToInvalidUsageFlags;
