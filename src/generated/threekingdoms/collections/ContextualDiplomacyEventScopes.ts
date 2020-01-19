
import { CollectionCache, CollectionKey } from "../../../common";


export namespace ContextualDiplomacyEventScopes {
  export const KEY = new CollectionKey("contextual_diplomacy_event_scopes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default ContextualDiplomacyEventScopes;
