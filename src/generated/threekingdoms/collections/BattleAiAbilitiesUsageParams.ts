
import { CollectionCache, CollectionKey } from "../../../common";


export namespace BattleAiAbilitiesUsageParams {
  export const KEY = new CollectionKey("battle_ai_abilities_usage_params");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly usageParam: string;
    readonly multiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.usageParam = values["usage_param"];
      this.multiplier = values["multiplier"];
    }
    
  }
}

export default BattleAiAbilitiesUsageParams;
