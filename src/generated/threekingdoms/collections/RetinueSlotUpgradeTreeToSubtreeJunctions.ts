
import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueSlotUpgradeTrees } from "./RetinueSlotUpgradeTrees";
import { RetinueSlotUpgradeSubtrees } from "./RetinueSlotUpgradeSubtrees";

export namespace RetinueSlotUpgradeTreeToSubtreeJunctions {
  export const KEY = new CollectionKey("retinue_slot_upgrade_tree_to_subtree_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _tree: string;
    readonly _subtree: string;
    readonly isLockedByDefault: boolean;
    readonly additionalCostSwitchingFromSubtree: number;
    readonly additionalTimeSwitchingFromSubtree: number;
    readonly mAdditionalCostSwitchingToSubtree: number;
    readonly mAdditionalTimeSwitchingToSubtree: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._tree = values["tree"];
      this._subtree = values["subtree"];
      this.isLockedByDefault = !!values["is_locked_by_default"];
      this.additionalCostSwitchingFromSubtree = values["additional_cost_switching_from_subtree"];
      this.additionalTimeSwitchingFromSubtree = values["additional_time_switching_from_subtree"];
      this.mAdditionalCostSwitchingToSubtree = values["m_additional_cost_switching_to_subtree"];
      this.mAdditionalTimeSwitchingToSubtree = values["m_additional_time_switching_to_subtree"];
    }
    
    get tree(): RetinueSlotUpgradeTrees.Entry | undefined {
      const collection = <RetinueSlotUpgradeTrees.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeTrees.KEY, RetinueSlotUpgradeTrees.Entry);
      return collection.find(entry => entry.key === this._tree);
    }
    
    get subtree(): RetinueSlotUpgradeSubtrees.Entry | undefined {
      const collection = <RetinueSlotUpgradeSubtrees.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeSubtrees.KEY, RetinueSlotUpgradeSubtrees.Entry);
      return collection.find(entry => entry.key === this._subtree);
    }
  }
}

export default RetinueSlotUpgradeTreeToSubtreeJunctions;
