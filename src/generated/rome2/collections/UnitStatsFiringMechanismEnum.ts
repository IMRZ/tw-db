
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitStatsFiringMechanismEnum {
  export const KEY = new CollectionKey("unit_stats_firing_mechanism_enum");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default UnitStatsFiringMechanismEnum;
