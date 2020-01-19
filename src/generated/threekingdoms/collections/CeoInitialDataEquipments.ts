
import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
import { CeoCategories } from "./CeoCategories";
import { Ceos } from "./Ceos";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";

export namespace CeoInitialDataEquipments {
  export const KEY = new CollectionKey("ceo_initial_data_equipments");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _initialDataStage: string;
    readonly _category: string;
    readonly slotIndex: number;
    readonly _equippedCeo: string;
    readonly autoId: number;
    readonly _target: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._initialDataStage = values["initial_data_stage"];
      this._category = values["category"];
      this.slotIndex = values["slot_index"];
      this._equippedCeo = values["equipped_ceo"];
      this.autoId = values["auto_id"];
      this._target = values["target"];
    }
    
    get initialDataStage(): CeoInitialDataStages.Entry | undefined {
      const collection = <CeoInitialDataStages.Entry[]>this.collectionCache.getCollection(CeoInitialDataStages.KEY, CeoInitialDataStages.Entry);
      return collection.find(entry => entry.key === this._initialDataStage);
    }
    
    get category(): CeoCategories.Entry | undefined {
      const collection = <CeoCategories.Entry[]>this.collectionCache.getCollection(CeoCategories.KEY, CeoCategories.Entry);
      return collection.find(entry => entry.key === this._category);
    }
    
    get equippedCeo(): Ceos.Entry | undefined {
      const collection = <Ceos.Entry[]>this.collectionCache.getCollection(Ceos.KEY, Ceos.Entry);
      return collection.find(entry => entry.key === this._equippedCeo);
    }
    
    get target(): CeoEquipmentManagerTypes.Entry | undefined {
      const collection = <CeoEquipmentManagerTypes.Entry[]>this.collectionCache.getCollection(CeoEquipmentManagerTypes.KEY, CeoEquipmentManagerTypes.Entry);
      return collection.find(entry => entry.key === this._target);
    }
  }
}

export default CeoInitialDataEquipments;
