
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsUnitRecords } from "./CampaignBonusValueIdsUnitRecords";
import { MainUnits } from "./MainUnits";

export namespace EffectBonusValueUnitRecordJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_unit_record_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _unitRecordKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._unitRecordKey = values["unit_record_key"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsUnitRecords.Entry | undefined {
      const collection = <CampaignBonusValueIdsUnitRecords.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsUnitRecords.KEY, CampaignBonusValueIdsUnitRecords.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get unitRecordKey(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitRecordKey);
    }
  }
}

export default EffectBonusValueUnitRecordJunctions;
