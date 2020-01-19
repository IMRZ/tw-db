
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleAiProperties } from "./BattleAiProperties";
import { BattleAiPersonalities } from "./BattleAiPersonalities";

export namespace BattleAiPropertyPersonalityJunctions {
  export const KEY = new CollectionKey("battle_ai_property_personality_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _property: string;
    readonly _personality: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._property = values["property"];
      this._personality = values["personality"];
    }
    
    get property(): BattleAiProperties.Entry | undefined {
      const collection = <BattleAiProperties.Entry[]>this.collectionCache.getCollection(BattleAiProperties.KEY, BattleAiProperties.Entry);
      return collection.find(entry => entry.property === this._property);
    }
    
    get personality(): BattleAiPersonalities.Entry | undefined {
      const collection = <BattleAiPersonalities.Entry[]>this.collectionCache.getCollection(BattleAiPersonalities.KEY, BattleAiPersonalities.Entry);
      return collection.find(entry => entry.personality === this._personality);
    }
  }
}

export default BattleAiPropertyPersonalityJunctions;
