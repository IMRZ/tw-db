
import { CollectionCache, CollectionKey } from "../../../common";
import { ModifiableUnitStats } from "./ModifiableUnitStats";

export namespace UnitExperienceBonuses {
  export const KEY = new CollectionKey("unit_experience_bonuses");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _stat: string;
    readonly value: number;
    readonly growthRate: number;
    readonly growthScalar: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._stat = values["stat"];
      this.value = values["value"];
      this.growthRate = values["growth_rate"];
      this.growthScalar = values["growth_scalar"];
    }
    
    get stat(): ModifiableUnitStats.Entry | undefined {
      const collection = <ModifiableUnitStats.Entry[]>this.collectionCache.getCollection(ModifiableUnitStats.KEY, ModifiableUnitStats.Entry);
      return collection.find(entry => entry.statKey === this._stat);
    }
  }
}

export default UnitExperienceBonuses;
