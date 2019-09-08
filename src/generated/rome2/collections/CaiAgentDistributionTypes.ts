
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiAgentDistributionTypes {
  export const KEY = new CollectionKey("cai_agent_distribution_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiAgentDistributionTypes;
