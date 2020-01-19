
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiConstructionSystemSynergyPolicies {
  export const KEY = new CollectionKey("cai_construction_system_synergy_policies");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiConstructionSystemSynergyPolicies;
