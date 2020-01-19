
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCampaignSeaRegionControlStatusRecords } from "./CampaignBonusValueIdsCampaignSeaRegionControlStatusRecords";
import { CampaignSeaRegionControlStatuses } from "./CampaignSeaRegionControlStatuses";

export namespace EffectBonusValueCampaignSeaRegionControlStatusRecordJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_campaign_sea_region_control_status_record_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _campaignSeaRegionControlStatusRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._campaignSeaRegionControlStatusRecord = values["campaign_sea_region_control_status_record"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsCampaignSeaRegionControlStatusRecords.Entry | undefined {
      const collection = <CampaignBonusValueIdsCampaignSeaRegionControlStatusRecords.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsCampaignSeaRegionControlStatusRecords.KEY, CampaignBonusValueIdsCampaignSeaRegionControlStatusRecords.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get campaignSeaRegionControlStatusRecord(): CampaignSeaRegionControlStatuses.Entry | undefined {
      const collection = <CampaignSeaRegionControlStatuses.Entry[]>this.collectionCache.getCollection(CampaignSeaRegionControlStatuses.KEY, CampaignSeaRegionControlStatuses.Entry);
      return collection.find(entry => entry.controlStatus === this._campaignSeaRegionControlStatusRecord);
    }
  }
}

export default EffectBonusValueCampaignSeaRegionControlStatusRecordJunctions;
