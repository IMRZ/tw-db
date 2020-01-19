
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { GovernmentTypes } from "./GovernmentTypes";
import { UnitsToGovTypeOutcomesEnum } from "./UnitsToGovTypeOutcomesEnum";

export namespace UnitsToGovTypePermissions {
  export const KEY = new CollectionKey("units_to_gov_type_permissions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly uniqueNumber: number;
    readonly _key: string;
    readonly _govType: string;
    readonly _outcome: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.uniqueNumber = values["unique_number"];
      this._key = values["key"];
      this._govType = values["gov_type"];
      this._outcome = values["outcome"];
    }
    
    get key(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._key);
    }
    
    get govType(): GovernmentTypes.Entry | undefined {
      const collection = <GovernmentTypes.Entry[]>this.collectionCache.getCollection(GovernmentTypes.KEY, GovernmentTypes.Entry);
      return collection.find(entry => entry.governmentType === this._govType);
    }
    
    get outcome(): UnitsToGovTypeOutcomesEnum.Entry | undefined {
      const collection = <UnitsToGovTypeOutcomesEnum.Entry[]>this.collectionCache.getCollection(UnitsToGovTypeOutcomesEnum.KEY, UnitsToGovTypeOutcomesEnum.Entry);
      return collection.find(entry => entry.key === this._outcome);
    }
  }
}

export default UnitsToGovTypePermissions;
