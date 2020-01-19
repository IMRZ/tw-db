
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";

export namespace CeoEquipmentManagers {
  export const KEY = new CollectionKey("ceo_equipment_managers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _existsInLocation: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._existsInLocation = values["exists_in_location"];
    }
    
    get existsInLocation(): CeoEquipmentManagerTypes.Entry | undefined {
      const collection = <CeoEquipmentManagerTypes.Entry[]>this.collectionCache.getCollection(CeoEquipmentManagerTypes.KEY, CeoEquipmentManagerTypes.Entry);
      return collection.find(entry => entry.key === this._existsInLocation);
    }
  }
}

export default CeoEquipmentManagers;
