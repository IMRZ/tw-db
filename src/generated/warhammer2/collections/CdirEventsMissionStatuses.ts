
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsMissionStatuses {
  export const KEY = new CollectionKey("cdir_events_mission_statuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly statusKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.statusKey = values["status_key"];
    }
    
  }
}

export default CdirEventsMissionStatuses;
