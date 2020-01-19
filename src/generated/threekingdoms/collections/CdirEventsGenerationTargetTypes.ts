
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsGenerationTargetTypes {
  export const KEY = new CollectionKey("cdir_events_generation_target_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly targetType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.targetType = values["target_type"];
    }
    
  }
}

export default CdirEventsGenerationTargetTypes;
