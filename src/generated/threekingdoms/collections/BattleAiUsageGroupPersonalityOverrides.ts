
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAiPersonalities } from "./BattleAiPersonalities";
import { LandUnits } from "./LandUnits";
import { AiUsageGroups } from "./AiUsageGroups";
import { UnitSets } from "./UnitSets";

export namespace BattleAiUsageGroupPersonalityOverrides {
  export const KEY = new CollectionKey("battle_ai_usage_group_personality_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _personality: string;
    readonly _unit: string;
    readonly _override: string;
    readonly _unitSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._personality = values["personality"];
      this._unit = values["unit"];
      this._override = values["override"];
      this._unitSet = values["unit_set"];
    }
    
    get personality(): BattleAiPersonalities.Entry | undefined {
      const collection = <BattleAiPersonalities.Entry[]>this.collectionCache.getCollection(BattleAiPersonalities.KEY, BattleAiPersonalities.Entry);
      return collection.find(entry => entry.personality === this._personality);
    }
    
    get unit(): LandUnits.Entry | undefined {
      const collection = <LandUnits.Entry[]>this.collectionCache.getCollection(LandUnits.KEY, LandUnits.Entry);
      return collection.find(entry => entry.key === this._unit);
    }
    
    get override(): AiUsageGroups.Entry | undefined {
      const collection = <AiUsageGroups.Entry[]>this.collectionCache.getCollection(AiUsageGroups.KEY, AiUsageGroups.Entry);
      return collection.find(entry => entry.key === this._override);
    }
    
    get unitSet(): UnitSets.Entry | undefined {
      const collection = <UnitSets.Entry[]>this.collectionCache.getCollection(UnitSets.KEY, UnitSets.Entry);
      return collection.find(entry => entry.key === this._unitSet);
    }
  }
}

export default BattleAiUsageGroupPersonalityOverrides;
