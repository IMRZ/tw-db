
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiMilitaryAggressivenessPolicies {
  export const KEY = new CollectionKey("cai_military_aggressiveness_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiMilitaryAggressivenessPolicies;
