
import { CollectionCache, CollectionKey } from "../../../common";
import { UiUnitStats } from "./UiUnitStats";

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
    
    get stat(): UiUnitStats.Entry | undefined {
      const collection = <UiUnitStats.Entry[]>this.collectionCache.getCollection(UiUnitStats.KEY, UiUnitStats.Entry);
      return collection.find(entry => entry.key === this._stat);
    }
  }
}

export default UnitExperienceBonuses;
