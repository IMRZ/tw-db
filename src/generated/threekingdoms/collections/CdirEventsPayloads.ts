
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsPayloads {
  export const KEY = new CollectionKey("cdir_events_payloads");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly payloadKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.payloadKey = values["payload_key"];
    }
    
  }
}

export default CdirEventsPayloads;
