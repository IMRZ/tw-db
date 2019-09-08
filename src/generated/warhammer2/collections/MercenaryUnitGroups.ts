
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";

export namespace MercenaryUnitGroups {
  export const KEY = new CollectionKey("mercenary_unit_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _unitRecord: string;
    readonly maxCount: number;
    readonly maxReplenishPerTurn: number;
    readonly chanceToReplenish: number;
    readonly usePartialReplenishment: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._unitRecord = values["unit_record"];
      this.maxCount = values["max_count"];
      this.maxReplenishPerTurn = values["max_replenish_per_turn"];
      this.chanceToReplenish = values["chance_to_replenish"];
      this.usePartialReplenishment = !!values["use_partial_replenishment"];
    }
    
    get unitRecord(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitRecord);
    }
  }
}

export default MercenaryUnitGroups;
