
import { CollectionCache, CollectionKey } from "../../../common";


export namespace WarscapeEquipmentItems {
  export const KEY = new CollectionKey("warscape_equipment_items");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly equipmentItem: string;
    readonly equipmentKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.equipmentItem = values["equipment_item"];
      this.equipmentKey = values["equipment_key"];
    }
    
  }
}

export default WarscapeEquipmentItems;
