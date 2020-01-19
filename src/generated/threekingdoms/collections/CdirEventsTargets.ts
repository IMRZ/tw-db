
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsTargets {
  export const KEY = new CollectionKey("cdir_events_targets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly targetKey: string;
    readonly description: string;
    readonly isPrimary: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.targetKey = values["target_key"];
      this.description = values["description"];
      this.isPrimary = !!values["is_primary"];
    }
    
  }
}

export default CdirEventsTargets;
