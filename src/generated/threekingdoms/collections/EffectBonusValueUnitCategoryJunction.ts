
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitCategory } from "./CampaignBonusValueIdsUnitCategory";
import { UnitCategory } from "./UnitCategory";

export namespace EffectBonusValueUnitCategoryJunction {
  export const KEY = new CollectionKey("effect_bonus_value_unit_category_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _unitCategory: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitCategory = values["unit_category"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsUnitCategory.Entry | undefined {
      const collection = <CampaignBonusValueIdsUnitCategory.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsUnitCategory.KEY, CampaignBonusValueIdsUnitCategory.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get unitCategory(): UnitCategory.Entry | undefined {
      const collection = <UnitCategory.Entry[]>this.collectionCache.getCollection(UnitCategory.KEY, UnitCategory.Entry);
      return collection.find(entry => entry.key === this._unitCategory);
    }
  }
}

export default EffectBonusValueUnitCategoryJunction;
