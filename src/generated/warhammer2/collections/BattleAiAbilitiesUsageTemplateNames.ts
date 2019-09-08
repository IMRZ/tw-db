
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleAiAbilitiesUsageTemplateNames {
  export const KEY = new CollectionKey("battle_ai_abilities_usage_template_names");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly aiAbilityUsageTemplateKey: string;
    readonly factorBias: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.aiAbilityUsageTemplateKey = values["ai_ability_usage_template_key"];
      this.factorBias = values["factor_bias"];
    }
    
  }
}

export default BattleAiAbilitiesUsageTemplateNames;
