
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitiesConstructionPreferencePolicies {
  export const KEY = new CollectionKey("cai_personalities_construction_preference_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiPersonalitiesConstructionPreferencePolicies;
