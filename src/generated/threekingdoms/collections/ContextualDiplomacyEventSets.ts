
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ContextualDiplomacyEventSets {
  export const KEY = new CollectionKey("contextual_diplomacy_event_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ContextualDiplomacyEventSets;
