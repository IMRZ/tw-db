
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitsToGovTypeOutcomesEnum {
  export const KEY = new CollectionKey("units_to_gov_type_outcomes_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitsToGovTypeOutcomesEnum;
