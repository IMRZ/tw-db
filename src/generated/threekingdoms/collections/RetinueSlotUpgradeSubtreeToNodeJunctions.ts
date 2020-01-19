
import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueSlotUpgradeSubtrees } from "./RetinueSlotUpgradeSubtrees";
import { RetinueSlotUpgradeNodes } from "./RetinueSlotUpgradeNodes";

export namespace RetinueSlotUpgradeSubtreeToNodeJunctions {
  export const KEY = new CollectionKey("retinue_slot_upgrade_subtree_to_node_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _subtree: string;
    readonly _node: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._subtree = values["subtree"];
      this._node = values["node"];
    }
    
    get subtree(): RetinueSlotUpgradeSubtrees.Entry | undefined {
      const collection = <RetinueSlotUpgradeSubtrees.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeSubtrees.KEY, RetinueSlotUpgradeSubtrees.Entry);
      return collection.find(entry => entry.key === this._subtree);
    }
    
    get node(): RetinueSlotUpgradeNodes.Entry | undefined {
      const collection = <RetinueSlotUpgradeNodes.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeNodes.KEY, RetinueSlotUpgradeNodes.Entry);
      return collection.find(entry => entry.key === this._node);
    }
  }
}

export default RetinueSlotUpgradeSubtreeToNodeJunctions;
