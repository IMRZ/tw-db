
import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueSlotUpgradeSubtrees } from "./RetinueSlotUpgradeSubtrees";
import { RetinueSlotUpgradeNodes } from "./RetinueSlotUpgradeNodes";

export namespace RetinueSlotUpgradeSubtreeRestrictions {
  export const KEY = new CollectionKey("retinue_slot_upgrade_subtree_restrictions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _subtree: string;
    readonly _sourceNode: string;
    readonly _targetNode: string;
    readonly locksConnection: boolean;
    readonly unlocksConnection: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._subtree = values["subtree"];
      this._sourceNode = values["source_node"];
      this._targetNode = values["target_node"];
      this.locksConnection = !!values["locks_connection"];
      this.unlocksConnection = !!values["unlocks_connection"];
    }
    
    get subtree(): RetinueSlotUpgradeSubtrees.Entry | undefined {
      const collection = <RetinueSlotUpgradeSubtrees.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeSubtrees.KEY, RetinueSlotUpgradeSubtrees.Entry);
      return collection.find(entry => entry.key === this._subtree);
    }
    
    get sourceNode(): RetinueSlotUpgradeNodes.Entry | undefined {
      const collection = <RetinueSlotUpgradeNodes.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeNodes.KEY, RetinueSlotUpgradeNodes.Entry);
      return collection.find(entry => entry.key === this._sourceNode);
    }
    
    get targetNode(): RetinueSlotUpgradeNodes.Entry | undefined {
      const collection = <RetinueSlotUpgradeNodes.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeNodes.KEY, RetinueSlotUpgradeNodes.Entry);
      return collection.find(entry => entry.key === this._targetNode);
    }
  }
}

export default RetinueSlotUpgradeSubtreeRestrictions;
