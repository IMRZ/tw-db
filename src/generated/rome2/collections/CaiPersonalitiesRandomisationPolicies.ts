
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitiesRandomisationPolicies {
  export const KEY = new CollectionKey("cai_personalities_randomisation_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly randomisationPolicyKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.randomisationPolicyKey = values["randomisation_policy_key"];
    }
    
  }
}

export default CaiPersonalitiesRandomisationPolicies;
