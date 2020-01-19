
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitCaste } from "./CampaignBonusValueIdsUnitCaste";
import { UnitCastes } from "./UnitCastes";

export namespace EffectBonusValueUnitCasteJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_caste_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _caste: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._caste = values["caste"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsUnitCaste.Entry | undefined {
      const collection = <CampaignBonusValueIdsUnitCaste.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsUnitCaste.KEY, CampaignBonusValueIdsUnitCaste.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get caste(): UnitCastes.Entry | undefined {
      const collection = <UnitCastes.Entry[]>this.collectionCache.getCollection(UnitCastes.KEY, UnitCastes.Entry);
      return collection.find(entry => entry.caste === this._caste);
    }
  }
}

export default EffectBonusValueUnitCasteJunctions;
