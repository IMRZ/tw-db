
import { CollectionCache, CollectionKey } from "../../../common";
import { LandUnitsAdditionalPersonalitiesGroups } from "./LandUnitsAdditionalPersonalitiesGroups";

export namespace LandUnitsOfficers {
  export const KEY = new CollectionKey("land_units_officers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _additionalPersonalities: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._additionalPersonalities = values["additional_personalities"];
    }
    
    get additionalPersonalities(): LandUnitsAdditionalPersonalitiesGroups.Entry | undefined {
      const collection = <LandUnitsAdditionalPersonalitiesGroups.Entry[]>this.collectionCache.getCollection(LandUnitsAdditionalPersonalitiesGroups.KEY, LandUnitsAdditionalPersonalitiesGroups.Entry);
      return collection.find(entry => entry.key === this._additionalPersonalities);
    }
  }
}

export default LandUnitsOfficers;
