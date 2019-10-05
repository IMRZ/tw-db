
import { CollectionCache, CollectionKey } from "../../../common";
import { UnitSets } from "./UnitSets";

export namespace UnitSetToMpUnitCaps {
  export const KEY = new CollectionKey("unit_set_to_mp_unit_caps");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _unitSet: string;
    readonly localisedName: string;
    readonly cap: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._unitSet = values["unit_set"];
      this.localisedName = values["localised_name"];
      this.cap = values["cap"];
    }
    
    get unitSet(): UnitSets.Entry | undefined {
      const collection = <UnitSets.Entry[]>this.collectionCache.getCollection(UnitSets.KEY, UnitSets.Entry);
      return collection.find(entry => entry.key === this._unitSet);
    }
  }
}

export default UnitSetToMpUnitCaps;
