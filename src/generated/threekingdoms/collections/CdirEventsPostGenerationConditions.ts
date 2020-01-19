
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CdirEventsPostGenerationConditions {
  export const KEY = new CollectionKey("cdir_events_post_generation_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly conditionKey: string;
    readonly notes: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.conditionKey = values["condition_key"];
      this.notes = values["notes"];
    }
    
  }
}

export default CdirEventsPostGenerationConditions;
