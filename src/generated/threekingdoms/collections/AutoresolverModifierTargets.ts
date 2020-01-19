
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitClass } from "./UnitClass";

export namespace AutoresolverModifierTargets {
  export const KEY = new CollectionKey("autoresolver_modifier_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _targetUnitClass: string;
    readonly _vsUnitClass: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._targetUnitClass = values["target_unit_class"];
      this._vsUnitClass = values["vs_unit_class"];
    }
    
    get targetUnitClass(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._targetUnitClass);
    }
    
    get vsUnitClass(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._vsUnitClass);
    }
  }
}

export default AutoresolverModifierTargets;
