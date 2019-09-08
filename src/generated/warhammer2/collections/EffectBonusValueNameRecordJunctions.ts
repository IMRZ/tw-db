
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsNameRecords } from "./CampaignBonusValueIdsNameRecords";
import { Names } from "./Names";

export namespace EffectBonusValueNameRecordJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_name_record_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _nameRecord: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._nameRecord = values["name_record"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsNameRecords.Entry | undefined {
      const collection = <CampaignBonusValueIdsNameRecords.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsNameRecords.KEY, CampaignBonusValueIdsNameRecords.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get nameRecord(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._nameRecord);
    }
  }
}

export default EffectBonusValueNameRecordJunctions;
