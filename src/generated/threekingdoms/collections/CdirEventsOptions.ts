
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsOptions {
  export const KEY = new CollectionKey("cdir_events_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly optionKey: string;
    readonly notes: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.optionKey = values["option_key"];
      this.notes = values["notes"];
    }
    
  }
}

export default CdirEventsOptions;
