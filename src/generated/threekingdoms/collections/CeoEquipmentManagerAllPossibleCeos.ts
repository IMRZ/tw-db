
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquipmentManagers } from "./CeoEquipmentManagers";
import { CeoGroups } from "./CeoGroups";

export namespace CeoEquipmentManagerAllPossibleCeos {
  export const KEY = new CollectionKey("ceo_equipment_manager_all_possible_ceos");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _equipmentManager: string;
    readonly _includeCeoGroup: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._equipmentManager = values["equipment_manager"];
      this._includeCeoGroup = values["include_ceo_group"];
    }
    
    get equipmentManager(): CeoEquipmentManagers.Entry | undefined {
      const collection = <CeoEquipmentManagers.Entry[]>this.collectionCache.getCollection(CeoEquipmentManagers.KEY, CeoEquipmentManagers.Entry);
      return collection.find(entry => entry.key === this._equipmentManager);
    }
    
    get includeCeoGroup(): CeoGroups.Entry | undefined {
      const collection = <CeoGroups.Entry[]>this.collectionCache.getCollection(CeoGroups.KEY, CeoGroups.Entry);
      return collection.find(entry => entry.key === this._includeCeoGroup);
    }
  }
}

export default CeoEquipmentManagerAllPossibleCeos;
