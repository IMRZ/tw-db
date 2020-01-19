
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiAgentTypes {
  export const KEY = new CollectionKey("cai_agent_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CaiAgentTypes;
