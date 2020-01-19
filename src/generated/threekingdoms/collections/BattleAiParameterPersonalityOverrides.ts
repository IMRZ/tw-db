
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAiPersonalities } from "./BattleAiPersonalities";
import { BattleAiParameters } from "./BattleAiParameters";

export namespace BattleAiParameterPersonalityOverrides {
  export const KEY = new CollectionKey("battle_ai_parameter_personality_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _personality: string;
    readonly _parameter: string;
    readonly override: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._personality = values["personality"];
      this._parameter = values["parameter"];
      this.override = values["override"];
    }
    
    get personality(): BattleAiPersonalities.Entry | undefined {
      const collection = <BattleAiPersonalities.Entry[]>this.collectionCache.getCollection(BattleAiPersonalities.KEY, BattleAiPersonalities.Entry);
      return collection.find(entry => entry.personality === this._personality);
    }
    
    get parameter(): BattleAiParameters.Entry | undefined {
      const collection = <BattleAiParameters.Entry[]>this.collectionCache.getCollection(BattleAiParameters.KEY, BattleAiParameters.Entry);
      return collection.find(entry => entry.parameter === this._parameter);
    }
  }
}

export default BattleAiParameterPersonalityOverrides;
