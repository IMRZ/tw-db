
import { CollectionCache, CollectionKey } from "../../../common";


export namespace LandUnitsAdditionalPersonalitiesGroups {
  export const KEY = new CollectionKey("land_units_additional_personalities_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default LandUnitsAdditionalPersonalitiesGroups;
