
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DynamicLoadingScreenEventFilterConditions {
  export const KEY = new CollectionKey("dynamic_loading_screen_event_filter_conditions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default DynamicLoadingScreenEventFilterConditions;
