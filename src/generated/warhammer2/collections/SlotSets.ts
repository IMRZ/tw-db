
import { CollectionCache, CollectionKey } from "../../../common";


export namespace SlotSets {
  export const KEY = new CollectionKey("slot_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly useDiscoverabilityFeature: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.useDiscoverabilityFeature = !!values["use_discoverability_feature"];
    }
    
  }
}

export default SlotSets;
