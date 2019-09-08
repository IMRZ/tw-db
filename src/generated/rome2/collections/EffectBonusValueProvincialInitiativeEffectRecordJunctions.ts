
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsProvincialInitiativeEffectRecords } from "./CampaignBonusValueIdsProvincialInitiativeEffectRecords";

export namespace EffectBonusValueProvincialInitiativeEffectRecordJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_provincial_initiative_effect_record_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _effectBonusWillModify: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._effectBonusWillModify = values["effect_bonus_will_modify"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsProvincialInitiativeEffectRecords.Entry | undefined {
      const collection = <CampaignBonusValueIdsProvincialInitiativeEffectRecords.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsProvincialInitiativeEffectRecords.KEY, CampaignBonusValueIdsProvincialInitiativeEffectRecords.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get effectBonusWillModify(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effectBonusWillModify);
    }
  }
}

export default EffectBonusValueProvincialInitiativeEffectRecordJunctions;
