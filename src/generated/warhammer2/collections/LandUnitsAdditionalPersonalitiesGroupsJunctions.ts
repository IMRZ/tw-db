
import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnitsAdditionalPersonalitiesGroups } from "./LandUnitsAdditionalPersonalitiesGroups";
import { BattlePersonalities } from "./BattlePersonalities";

export namespace LandUnitsAdditionalPersonalitiesGroupsJunctions {
  export const KEY = new CollectionKey("land_units_additional_personalities_groups_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly _battlePersonality: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this._battlePersonality = values["battle_personality"];
    }
    
    get group(): LandUnitsAdditionalPersonalitiesGroups.Entry | undefined {
      const collection = <LandUnitsAdditionalPersonalitiesGroups.Entry[]>this.collectionCache.getCollection(LandUnitsAdditionalPersonalitiesGroups.KEY, LandUnitsAdditionalPersonalitiesGroups.Entry);
      return collection.find(entry => entry.key === this._group);
    }
    
    get battlePersonality(): BattlePersonalities.Entry | undefined {
      const collection = <BattlePersonalities.Entry[]>this.collectionCache.getCollection(BattlePersonalities.KEY, BattlePersonalities.Entry);
      return collection.find(entry => entry.key === this._battlePersonality);
    }
  }
}

export default LandUnitsAdditionalPersonalitiesGroupsJunctions;
