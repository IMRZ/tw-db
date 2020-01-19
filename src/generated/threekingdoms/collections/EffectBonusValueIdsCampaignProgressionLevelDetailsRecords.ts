
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCampaignProgressionLevelDetailsRecords } from "./CampaignBonusValueIdsCampaignProgressionLevelDetailsRecords";
import { CampaignProgressionLevelDetails } from "./CampaignProgressionLevelDetails";

export namespace EffectBonusValueIdsCampaignProgressionLevelDetailsRecords {
  export const KEY = new CollectionKey("effect_bonus_value_ids_campaign_progression_level_details_records");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _campaignProgressionLevelDetailsRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._campaignProgressionLevelDetailsRecord = values["campaign_progression_level_details_record"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsCampaignProgressionLevelDetailsRecords.Entry | undefined {
      const collection = <CampaignBonusValueIdsCampaignProgressionLevelDetailsRecords.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsCampaignProgressionLevelDetailsRecords.KEY, CampaignBonusValueIdsCampaignProgressionLevelDetailsRecords.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get campaignProgressionLevelDetailsRecord(): CampaignProgressionLevelDetails.Entry | undefined {
      const collection = <CampaignProgressionLevelDetails.Entry[]>this.collectionCache.getCollection(CampaignProgressionLevelDetails.KEY, CampaignProgressionLevelDetails.Entry);
      return collection.find(entry => entry.key === this._campaignProgressionLevelDetailsRecord);
    }
  }
}

export default EffectBonusValueIdsCampaignProgressionLevelDetailsRecords;
