
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitSetUnitAttributes } from "./CampaignBonusValueIdsUnitSetUnitAttributes";
import { UnitSetUnitAttributeJunctions } from "./UnitSetUnitAttributeJunctions";

export namespace EffectBonusValueUnitSetUnitAttributeJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_set_unit_attribute_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _unitSetAttribute: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitSetAttribute = values["unit_set_attribute"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsUnitSetUnitAttributes.Entry | undefined {
      const collection = <CampaignBonusValueIdsUnitSetUnitAttributes.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsUnitSetUnitAttributes.KEY, CampaignBonusValueIdsUnitSetUnitAttributes.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get unitSetAttribute(): UnitSetUnitAttributeJunctions.Entry | undefined {
      const collection = <UnitSetUnitAttributeJunctions.Entry[]>this.collectionCache.getCollection(UnitSetUnitAttributeJunctions.KEY, UnitSetUnitAttributeJunctions.Entry);
      return collection.find(entry => entry.key === this._unitSetAttribute);
    }
  }
}

export default EffectBonusValueUnitSetUnitAttributeJunctions;
