
import { CollectionCache, CollectionKey } from "../../../common";
import { AiUsageGroups } from "./AiUsageGroups";

export namespace AutoresolverAiUsageGroupCombatPotentialModifiers {
  export const KEY = new CollectionKey("autoresolver_ai_usage_group_combat_potential_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _usageGroup: string;
    readonly additiveMod: number;
    readonly multiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._usageGroup = values["usage_group"];
      this.additiveMod = values["additive_mod"];
      this.multiplier = values["multiplier"];
    }
    
    get usageGroup(): AiUsageGroups.Entry | undefined {
      const collection = <AiUsageGroups.Entry[]>this.collectionCache.getCollection(AiUsageGroups.KEY, AiUsageGroups.Entry);
      return collection.find(entry => entry.key === this._usageGroup);
    }
  }
}

export default AutoresolverAiUsageGroupCombatPotentialModifiers;
