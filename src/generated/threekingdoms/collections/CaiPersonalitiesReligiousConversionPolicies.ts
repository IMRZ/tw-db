
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitiesReligiousConversionPolicies {
  export const KEY = new CollectionKey("cai_personalities_religious_conversion_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiPersonalitiesReligiousConversionPolicies;
