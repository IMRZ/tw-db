
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAiAbilitiesUsageTemplateNames } from "./BattleAiAbilitiesUsageTemplateNames";
import { BattleAiAbilitiesUsageParams } from "./BattleAiAbilitiesUsageParams";

export namespace BattleAiAbilitiesUsageTemplatesToParams {
  export const KEY = new CollectionKey("battle_ai_abilities_usage_templates_to_params");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _template: string;
    readonly _parameter: string;
    readonly weighting: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._template = values["template"];
      this._parameter = values["parameter"];
      this.weighting = values["weighting"];
    }
    
    get template(): BattleAiAbilitiesUsageTemplateNames.Entry | undefined {
      const collection = <BattleAiAbilitiesUsageTemplateNames.Entry[]>this.collectionCache.getCollection(BattleAiAbilitiesUsageTemplateNames.KEY, BattleAiAbilitiesUsageTemplateNames.Entry);
      return collection.find(entry => entry.aiAbilityUsageTemplateKey === this._template);
    }
    
    get parameter(): BattleAiAbilitiesUsageParams.Entry | undefined {
      const collection = <BattleAiAbilitiesUsageParams.Entry[]>this.collectionCache.getCollection(BattleAiAbilitiesUsageParams.KEY, BattleAiAbilitiesUsageParams.Entry);
      return collection.find(entry => entry.usageParam === this._parameter);
    }
  }
}

export default BattleAiAbilitiesUsageTemplatesToParams;
