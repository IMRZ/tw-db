
import { CollectionCache, CollectionKey } from "../../../common";


export namespace StartPosRegionSlotSets {
  export const KEY = new CollectionKey("start_pos_region_slot_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default StartPosRegionSlotSets;
