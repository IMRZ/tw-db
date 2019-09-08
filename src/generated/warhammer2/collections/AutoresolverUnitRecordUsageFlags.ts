
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace AutoresolverUnitRecordUsageFlags {
  export const KEY = new CollectionKey("autoresolver_unit_record_usage_flags");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _mainUnitRecord: string;
    readonly alwaysDestroyIfEngagedInMelee: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._mainUnitRecord = values["main_unit_record"];
      this.alwaysDestroyIfEngagedInMelee = !!values["always_destroy_if_engaged_in_melee"];
    }
    
    get mainUnitRecord(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._mainUnitRecord);
    }
  }
}

export default AutoresolverUnitRecordUsageFlags;
