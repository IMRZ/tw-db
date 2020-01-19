
import { CollectionCache, CollectionKey } from "../../../common";
import { Units } from "./Units";
import { GovernmentTypes } from "./GovernmentTypes";
import { UnitsToGovTypeOutcomesEnum } from "./UnitsToGovTypeOutcomesEnum";

export namespace UnitsToGovTypeOutcomes {
  export const KEY = new CollectionKey("units_to_gov_type_outcomes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _key: string;
    readonly _govType: string;
    readonly _outcome: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._key = values["key"];
      this._govType = values["gov_type"];
      this._outcome = values["outcome"];
    }
    
    get key(): Units.Entry | undefined {
      const collection = <Units.Entry[]>this.collectionCache.getCollection(Units.KEY, Units.Entry);
      return collection.find(entry => entry.key === this._key);
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

export default UnitsToGovTypeOutcomes;
