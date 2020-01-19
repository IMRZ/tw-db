
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitClass } from "./CampaignBonusValueIdsUnitClass";
import { UnitClass } from "./UnitClass";

export namespace EffectBonusValueUnitClassJunction {
  export const KEY = new CollectionKey("effect_bonus_value_unit_class_junction");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _unitClass: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitClass = values["unit_class"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsUnitClass.Entry | undefined {
      const collection = <CampaignBonusValueIdsUnitClass.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsUnitClass.KEY, CampaignBonusValueIdsUnitClass.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get unitClass(): UnitClass.Entry | undefined {
      const collection = <UnitClass.Entry[]>this.collectionCache.getCollection(UnitClass.KEY, UnitClass.Entry);
      return collection.find(entry => entry.key === this._unitClass);
    }
  }
}

export default EffectBonusValueUnitClassJunction;
