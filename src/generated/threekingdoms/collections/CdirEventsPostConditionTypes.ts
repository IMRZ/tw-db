
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsPostConditionTypes {
  export const KEY = new CollectionKey("cdir_events_post_condition_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default CdirEventsPostConditionTypes;
