
import { CollectionCache, CollectionKey } from "../../../common";
import { BattleCatchmentOverrideGroups } from "./BattleCatchmentOverrideGroups";

export namespace BattleCatchmentOverrideGroupBattles {
  export const KEY = new CollectionKey("battle_catchment_override_group_battles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _group: string;
    readonly battleMapLocation: string;
    readonly catchmentName: string;
    readonly tileUpgrades: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._group = values["group"];
      this.battleMapLocation = values["battle_map_location"];
      this.catchmentName = values["catchment_name"];
      this.tileUpgrades = values["tile_upgrades"];
    }
    
    get group(): BattleCatchmentOverrideGroups.Entry | undefined {
      const collection = <BattleCatchmentOverrideGroups.Entry[]>this.collectionCache.getCollection(BattleCatchmentOverrideGroups.KEY, BattleCatchmentOverrideGroups.Entry);
      return collection.find(entry => entry.group === this._group);
    }
  }
}

export default BattleCatchmentOverrideGroupBattles;
