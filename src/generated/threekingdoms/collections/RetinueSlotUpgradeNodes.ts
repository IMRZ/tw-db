
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace RetinueSlotUpgradeNodes {
  export const KEY = new CollectionKey("retinue_slot_upgrade_nodes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _unit: string;
    readonly isLockedByDefault: boolean;
    readonly additionalCostSwitchingFromNode: number;
    readonly additionalTimeSwitchingFromNode: number;
    readonly additionalCostSwitchingToNode: number;
    readonly additionalTimeSwitchingToNode: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._unit = values["unit"];
      this.isLockedByDefault = !!values["is_locked_by_default"];
      this.additionalCostSwitchingFromNode = values["additional_cost_switching_from_node"];
      this.additionalTimeSwitchingFromNode = values["additional_time_switching_from_node"];
      this.additionalCostSwitchingToNode = values["additional_cost_switching_to_node"];
      this.additionalTimeSwitchingToNode = values["additional_time_switching_to_node"];
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default RetinueSlotUpgradeNodes;
