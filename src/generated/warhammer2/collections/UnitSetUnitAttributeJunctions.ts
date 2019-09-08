
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSets } from "./UnitSets";
import { UnitAttributes } from "./UnitAttributes";

export namespace UnitSetUnitAttributeJunctions {
  export const KEY = new CollectionKey("unit_set_unit_attribute_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _unitSet: string;
    readonly _unitAttribute: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._unitSet = values["unit_set"];
      this._unitAttribute = values["unit_attribute"];
    }
    
    get unitSet(): UnitSets.Entry | undefined {
      const collection = <UnitSets.Entry[]>this.collectionCache.getCollection(UnitSets.KEY, UnitSets.Entry);
      return collection.find(entry => entry.key === this._unitSet);
    }
    
    get unitAttribute(): UnitAttributes.Entry | undefined {
      const collection = <UnitAttributes.Entry[]>this.collectionCache.getCollection(UnitAttributes.KEY, UnitAttributes.Entry);
      return collection.find(entry => entry.key === this._unitAttribute);
    }
  }
}

export default UnitSetUnitAttributeJunctions;
