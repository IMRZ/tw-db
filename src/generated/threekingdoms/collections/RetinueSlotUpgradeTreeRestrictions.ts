
import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueSlotUpgradeTrees } from "./RetinueSlotUpgradeTrees";
import { RetinueSlotUpgradeSubtrees } from "./RetinueSlotUpgradeSubtrees";
import { RetinueSlotUpgradeNodes } from "./RetinueSlotUpgradeNodes";

export namespace RetinueSlotUpgradeTreeRestrictions {
  export const KEY = new CollectionKey("retinue_slot_upgrade_tree_restrictions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _tree: string;
    readonly _sourceSubtree: string;
    readonly _sourceSubtreeNode: string;
    readonly _targetSubtree: string;
    readonly _targetSubtreeNode: string;
    readonly locksConnection: boolean;
    readonly unlocksConnection: boolean;
    readonly id: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._tree = values["tree"];
      this._sourceSubtree = values["source_subtree"];
      this._sourceSubtreeNode = values["source_subtree_node"];
      this._targetSubtree = values["target_subtree"];
      this._targetSubtreeNode = values["target_subtree_node"];
      this.locksConnection = !!values["locks_connection"];
      this.unlocksConnection = !!values["unlocks_connection"];
      this.id = values["id"];
    }
    
    get tree(): RetinueSlotUpgradeTrees.Entry | undefined {
      const collection = <RetinueSlotUpgradeTrees.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeTrees.KEY, RetinueSlotUpgradeTrees.Entry);
      return collection.find(entry => entry.key === this._tree);
    }
    
    get sourceSubtree(): RetinueSlotUpgradeSubtrees.Entry | undefined {
      const collection = <RetinueSlotUpgradeSubtrees.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeSubtrees.KEY, RetinueSlotUpgradeSubtrees.Entry);
      return collection.find(entry => entry.key === this._sourceSubtree);
    }
    
    get sourceSubtreeNode(): RetinueSlotUpgradeNodes.Entry | undefined {
      const collection = <RetinueSlotUpgradeNodes.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeNodes.KEY, RetinueSlotUpgradeNodes.Entry);
      return collection.find(entry => entry.key === this._sourceSubtreeNode);
    }
    
    get targetSubtree(): RetinueSlotUpgradeSubtrees.Entry | undefined {
      const collection = <RetinueSlotUpgradeSubtrees.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeSubtrees.KEY, RetinueSlotUpgradeSubtrees.Entry);
      return collection.find(entry => entry.key === this._targetSubtree);
    }
    
    get targetSubtreeNode(): RetinueSlotUpgradeNodes.Entry | undefined {
      const collection = <RetinueSlotUpgradeNodes.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeNodes.KEY, RetinueSlotUpgradeNodes.Entry);
      return collection.find(entry => entry.key === this._targetSubtreeNode);
    }
  }
}

export default RetinueSlotUpgradeTreeRestrictions;
