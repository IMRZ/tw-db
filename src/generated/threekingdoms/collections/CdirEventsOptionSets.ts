
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsOptionSets {
  export const KEY = new CollectionKey("cdir_events_option_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default CdirEventsOptionSets;
