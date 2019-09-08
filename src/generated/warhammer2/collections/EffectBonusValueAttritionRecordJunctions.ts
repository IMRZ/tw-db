
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsAttritionRecords } from "./CampaignBonusValueIdsAttritionRecords";
import { CampaignMapAttritions } from "./CampaignMapAttritions";

export namespace EffectBonusValueAttritionRecordJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_attrition_record_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _attritionRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._attritionRecord = values["attrition_record"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsAttritionRecords.Entry | undefined {
      const collection = <CampaignBonusValueIdsAttritionRecords.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsAttritionRecords.KEY, CampaignBonusValueIdsAttritionRecords.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get attritionRecord(): CampaignMapAttritions.Entry | undefined {
      const collection = <CampaignMapAttritions.Entry[]>this.collectionCache.getCollection(CampaignMapAttritions.KEY, CampaignMapAttritions.Entry);
      return collection.find(entry => entry.key === this._attritionRecord);
    }
  }
}

export default EffectBonusValueAttritionRecordJunctions;
