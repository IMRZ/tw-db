
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiPersonalitiesReliabilityPolicies {
  export const KEY = new CollectionKey("cai_personalities_reliability_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly joinAllyBias: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.joinAllyBias = values["join_ally_bias"];
    }
    
  }
}

export default CaiPersonalitiesReliabilityPolicies;
