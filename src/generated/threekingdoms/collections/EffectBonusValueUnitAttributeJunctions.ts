
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitAttributes } from "./CampaignBonusValueIdsUnitAttributes";
import { UnitAttributes } from "./UnitAttributes";

export namespace EffectBonusValueUnitAttributeJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_attribute_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _unitAttribute: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitAttribute = values["unit_attribute"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsUnitAttributes.Entry | undefined {
      const collection = <CampaignBonusValueIdsUnitAttributes.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsUnitAttributes.KEY, CampaignBonusValueIdsUnitAttributes.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get unitAttribute(): UnitAttributes.Entry | undefined {
      const collection = <UnitAttributes.Entry[]>this.collectionCache.getCollection(UnitAttributes.KEY, UnitAttributes.Entry);
      return collection.find(entry => entry.key === this._unitAttribute);
    }
  }
}

export default EffectBonusValueUnitAttributeJunctions;
