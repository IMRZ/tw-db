
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiMilitaryBehaviourPolicies {
  export const KEY = new CollectionKey("cai_military_behaviour_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiMilitaryBehaviourPolicies;
