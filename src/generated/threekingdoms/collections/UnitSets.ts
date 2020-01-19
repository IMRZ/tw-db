
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitSets {
  export const KEY = new CollectionKey("unit_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly useUnitExpLevelRange: boolean;
    readonly minUnitExpLevelInclusive: number;
    readonly maxUnitExpLevelInclusive: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.useUnitExpLevelRange = !!values["use_unit_exp_level_range"];
      this.minUnitExpLevelInclusive = values["min_unit_exp_level_inclusive"];
      this.maxUnitExpLevelInclusive = values["max_unit_exp_level_inclusive"];
    }
    
  }
}

export default UnitSets;
