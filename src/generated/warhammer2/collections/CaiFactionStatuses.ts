
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiFactionStatuses {
  export const KEY = new CollectionKey("cai_faction_statuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly factionStatus: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.factionStatus = values["faction_status"];
    }
    
  }
}

export default CaiFactionStatuses;
