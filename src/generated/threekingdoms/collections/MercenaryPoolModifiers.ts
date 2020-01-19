
import { CollectionCache, CollectionKey } from "../../../common";
import { MercenaryPoolTypeEnums } from "./MercenaryPoolTypeEnums";

export namespace MercenaryPoolModifiers {
  export const KEY = new CollectionKey("mercenary_pool_modifiers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _poolType: string;
    readonly cultureOriginMatch: boolean;
    readonly minPoolCulturePercentage: number;
    readonly replenishmentModifier: number;
    readonly costModifier: number;
    readonly key: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._poolType = values["pool_type"];
      this.cultureOriginMatch = !!values["culture_origin_match"];
      this.minPoolCulturePercentage = values["min_pool_culture_percentage"];
      this.replenishmentModifier = values["replenishment_modifier"];
      this.costModifier = values["cost_modifier"];
      this.key = values["key"];
    }
    
    get poolType(): MercenaryPoolTypeEnums.Entry | undefined {
      const collection = <MercenaryPoolTypeEnums.Entry[]>this.collectionCache.getCollection(MercenaryPoolTypeEnums.KEY, MercenaryPoolTypeEnums.Entry);
      return collection.find(entry => entry.poolType === this._poolType);
    }
  }
}

export default MercenaryPoolModifiers;
