
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitStatsSkeletonMeleeEnum {
  export const KEY = new CollectionKey("unit_stats_skeleton_melee_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitStatsSkeletonMeleeEnum;
