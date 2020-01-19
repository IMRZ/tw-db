
import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCampaignTerritoryTypeRecords } from "./CampaignBonusValueIdsCampaignTerritoryTypeRecords";
import { CampaignTerritoryTypes } from "./CampaignTerritoryTypes";

export namespace EffectBonusValueCampaignTerritoryTypeRecordJunctions {
  export const KEY = new CollectionKey("effect_bonus_value_campaign_territory_type_record_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effect: string;
    readonly _bonusValueId: string;
    readonly _campaignTerritoryType: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effect = values["effect"];
      this._bonusValueId = values["bonus_value_id"];
      this._campaignTerritoryType = values["campaign_territory_type"];
    }
    
    get effect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._effect);
    }
    
    get bonusValueId(): CampaignBonusValueIdsCampaignTerritoryTypeRecords.Entry | undefined {
      const collection = <CampaignBonusValueIdsCampaignTerritoryTypeRecords.Entry[]>this.collectionCache.getCollection(CampaignBonusValueIdsCampaignTerritoryTypeRecords.KEY, CampaignBonusValueIdsCampaignTerritoryTypeRecords.Entry);
      return collection.find(entry => entry.key === this._bonusValueId);
    }
    
    get campaignTerritoryType(): CampaignTerritoryTypes.Entry | undefined {
      const collection = <CampaignTerritoryTypes.Entry[]>this.collectionCache.getCollection(CampaignTerritoryTypes.KEY, CampaignTerritoryTypes.Entry);
      return collection.find(entry => entry.key === this._campaignTerritoryType);
    }
  }
}

export default EffectBonusValueCampaignTerritoryTypeRecordJunctions;
