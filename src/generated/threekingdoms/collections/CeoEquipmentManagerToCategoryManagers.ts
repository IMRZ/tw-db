
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquipmentManagers } from "./CeoEquipmentManagers";
import { CeoEquipmentCategoryManagers } from "./CeoEquipmentCategoryManagers";

export namespace CeoEquipmentManagerToCategoryManagers {
  export const KEY = new CollectionKey("ceo_equipment_manager_to_category_managers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _equipmentManager: string;
    readonly _categoryManager: string;
    readonly autoId: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._equipmentManager = values["equipment_manager"];
      this._categoryManager = values["category_manager"];
      this.autoId = values["auto_id"];
    }
    
    get equipmentManager(): CeoEquipmentManagers.Entry | undefined {
      const collection = <CeoEquipmentManagers.Entry[]>this.collectionCache.getCollection(CeoEquipmentManagers.KEY, CeoEquipmentManagers.Entry);
      return collection.find(entry => entry.key === this._equipmentManager);
    }
    
    get categoryManager(): CeoEquipmentCategoryManagers.Entry | undefined {
      const collection = <CeoEquipmentCategoryManagers.Entry[]>this.collectionCache.getCollection(CeoEquipmentCategoryManagers.KEY, CeoEquipmentCategoryManagers.Entry);
      return collection.find(entry => entry.key === this._categoryManager);
    }
  }
}

export default CeoEquipmentManagerToCategoryManagers;
