
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AgentSubtypeWeightedSelectionSets {
  export const KEY = new CollectionKey("agent_subtype_weighted_selection_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default AgentSubtypeWeightedSelectionSets;
