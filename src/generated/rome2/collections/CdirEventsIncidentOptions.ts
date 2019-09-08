
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsIncidentOptions {
  export const KEY = new CollectionKey("cdir_events_incident_options");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly optionKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.optionKey = values["option_key"];
    }
    
  }
}

export default CdirEventsIncidentOptions;
