
import { CollectionCache, CollectionKey } from "../../../common";


export namespace UnitPopulationCaps {
  export const KEY = new CollectionKey("unit_population_caps");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unit: any;
    readonly _faction: any;
    readonly unitCap: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unit = values["unit"];
      this._faction = values["faction"];
      this.unitCap = values["unit_cap"];
    }
    
  }
}

export default UnitPopulationCaps;
