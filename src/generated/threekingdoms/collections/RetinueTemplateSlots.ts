
import { CollectionCache, CollectionKey } from "../../../common";
import { RetinueTemplates } from "./RetinueTemplates";
import { RetinueSlotTypes } from "./RetinueSlotTypes";
import { RetinueSlotUpgradeTrees } from "./RetinueSlotUpgradeTrees";

export namespace RetinueTemplateSlots {
  export const KEY = new CollectionKey("retinue_template_slots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _retinueTemplate: string;
    readonly slotIndex: number;
    readonly _slotType: string;
    readonly _upgradeTree: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._retinueTemplate = values["retinue_template"];
      this.slotIndex = values["slot_index"];
      this._slotType = values["slot_type"];
      this._upgradeTree = values["upgrade_tree"];
    }
    
    get retinueTemplate(): RetinueTemplates.Entry | undefined {
      const collection = <RetinueTemplates.Entry[]>this.collectionCache.getCollection(RetinueTemplates.KEY, RetinueTemplates.Entry);
      return collection.find(entry => entry.key === this._retinueTemplate);
    }
    
    get slotType(): RetinueSlotTypes.Entry | undefined {
      const collection = <RetinueSlotTypes.Entry[]>this.collectionCache.getCollection(RetinueSlotTypes.KEY, RetinueSlotTypes.Entry);
      return collection.find(entry => entry.type === this._slotType);
    }
    
    get upgradeTree(): RetinueSlotUpgradeTrees.Entry | undefined {
      const collection = <RetinueSlotUpgradeTrees.Entry[]>this.collectionCache.getCollection(RetinueSlotUpgradeTrees.KEY, RetinueSlotUpgradeTrees.Entry);
      return collection.find(entry => entry.key === this._upgradeTree);
    }
  }
}

export default RetinueTemplateSlots;
