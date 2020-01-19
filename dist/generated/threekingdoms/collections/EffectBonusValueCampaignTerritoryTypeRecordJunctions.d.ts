import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCampaignTerritoryTypeRecords } from "./CampaignBonusValueIdsCampaignTerritoryTypeRecords";
import { CampaignTerritoryTypes } from "./CampaignTerritoryTypes";
export declare namespace EffectBonusValueCampaignTerritoryTypeRecordJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _campaignTerritoryType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsCampaignTerritoryTypeRecords.Entry | undefined;
        get campaignTerritoryType(): CampaignTerritoryTypes.Entry | undefined;
    }
}
export default EffectBonusValueCampaignTerritoryTypeRecordJunctions;
