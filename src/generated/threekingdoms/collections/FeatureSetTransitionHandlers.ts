
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FeatureSetTransitionHandlers {
  export const KEY = new CollectionKey("feature_set_transition_handlers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default FeatureSetTransitionHandlers;
