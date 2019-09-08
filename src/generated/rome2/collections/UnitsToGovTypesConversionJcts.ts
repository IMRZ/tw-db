
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitsToGovTypePermissions } from "./UnitsToGovTypePermissions";
import { MainUnits } from "./MainUnits";

export namespace UnitsToGovTypesConversionJcts {
  export const KEY = new CollectionKey("units_to_gov_types_conversion_jcts");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: number;
    readonly _unit: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._unit = values["unit"];
    }
    
    get key(): UnitsToGovTypePermissions.Entry | undefined {
      const collection = <UnitsToGovTypePermissions.Entry[]>this.collectionCache.getCollection(UnitsToGovTypePermissions.KEY, UnitsToGovTypePermissions.Entry);
      return collection.find(entry => entry.uniqueNumber === this._key);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default UnitsToGovTypesConversionJcts;
