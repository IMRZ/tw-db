
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCampaignDiplomacyTreatyComponentRecords } from "./CampaignBonusValueIdsCampaignDiplomacyTreatyComponentRecords";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";

export namespace EffectBonusValueCampaignDiplomacyTreatyComponentRecords {
  export const KEY = new CollectionKey("effect_bonus_value_campaign_diplomacy_treaty_component_records");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _campaignDiplomacyTreatyComponentRecord: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._campaignDiplomacyTreatyComponentRecord = values["campaign_diplomacy_treaty_component_record"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsCampaignDiplomacyTreatyComponentRecords.Entry | undefined {
      const collection = <CampaignBonusValueIdsCampaignDiplomacyTreatyComponentRecords.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsCampaignDiplomacyTreatyComponentRecords.KEY, CampaignBonusValueIdsCampaignDiplomacyTreatyComponentRecords.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get campaignDiplomacyTreatyComponentRecord(): CampaignDiplomacyTreatyComponents.Entry | undefined {
      const collection = <CampaignDiplomacyTreatyComponents.Entry[]>this.collectionCache.getCollection(CampaignDiplomacyTreatyComponents.KEY, CampaignDiplomacyTreatyComponents.Entry);
      return collection.find(entry => entry.key === this._campaignDiplomacyTreatyComponentRecord);
    }
  }
}

export default EffectBonusValueCampaignDiplomacyTreatyComponentRecords;
