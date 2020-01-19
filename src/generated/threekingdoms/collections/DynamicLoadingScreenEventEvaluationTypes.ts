
import { CollectionCache, CollectionKey } from "../../../common";


export namespace DynamicLoadingScreenEventEvaluationTypes {
  export const KEY = new CollectionKey("dynamic_loading_screen_event_evaluation_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly type: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.type = values["type"];
    }
    
  }
}

export default DynamicLoadingScreenEventEvaluationTypes;
