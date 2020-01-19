
import { CollectionCache, CollectionKey } from "../../../common";


export namespace RetinueSlotUpgradeTrees {
  export const KEY = new CollectionKey("retinue_slot_upgrade_trees");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default RetinueSlotUpgradeTrees;
