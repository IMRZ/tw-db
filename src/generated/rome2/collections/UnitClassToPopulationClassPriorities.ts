
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitClass } from "./UnitClass";

export namespace UnitClassToPopulationClassPriorities {
  export const KEY = new CollectionKey("unit_class_to_population_class_priorities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitClass: string;
    readonly upperClassPriority: number;
    readonly middleClassPriority: number;
    readonly lowerClassPriority: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitClass = values["unit_class"];
      this.upperClassPriority = values["upper_class_priority"];
      this.middleClassPriority = values["middle_class_priority"];
      this.lowerClassPriority = values["lower_class_priority"];
    }
    
    get unitClass(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._unitClass);
    }
  }
}

export default UnitClassToPopulationClassPriorities;
