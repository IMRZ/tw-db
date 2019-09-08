
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSets } from "./UnitSets";
import { MainUnits } from "./MainUnits";
import { UnitCastes } from "./UnitCastes";
import { UnitCategory } from "./UnitCategory";
import { UnitClass } from "./UnitClass";

export namespace UnitSetToUnitJunctions {
  export const KEY = new CollectionKey("unit_set_to_unit_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitSet: string;
    readonly _unitRecord: string;
    readonly _unitCaste: string;
    readonly _unitCategory: string;
    readonly _unitClass: string;
    readonly exclude: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitSet = values["unit_set"];
      this._unitRecord = values["unit_record"];
      this._unitCaste = values["unit_caste"];
      this._unitCategory = values["unit_category"];
      this._unitClass = values["unit_class"];
      this.exclude = !!values["exclude"];
    }
    
    get unitSet(): UnitSets.Entry | undefined {
      const collection = <UnitSets.Entry[]>this.collectionCache.getCollection(UnitSets.KEY, UnitSets.Entry);
      return collection.find(entry => entry.key === this._unitSet);
    }
    
    get unitRecord(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitRecord);
    }
    
    get unitCaste(): UnitCastes.Entry | undefined {
      const collection = <UnitCastes.Entry[]>this.collectionCache.getCollection(UnitCastes.KEY, UnitCastes.Entry);
      return collection.find(entry => entry.caste === this._unitCaste);
    }
    
    get unitCategory(): UnitCategory.Entry | undefined {
      const collection = <UnitCategory.Entry[]>this.collectionCache.getCollection(UnitCategory.KEY, UnitCategory.Entry);
      return collection.find(entry => entry.key === this._unitCategory);
    }
    
    get unitClass(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._unitClass);
    }
  }
}

export default UnitSetToUnitJunctions;
