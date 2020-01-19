import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCampaignDiplomacyTreatyComponentRecords } from "./CampaignBonusValueIdsCampaignDiplomacyTreatyComponentRecords";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace EffectBonusValueCampaignDiplomacyTreatyComponentRecords {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _campaignDiplomacyTreatyComponentRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsCampaignDiplomacyTreatyComponentRecords.Entry | undefined;
        get campaignDiplomacyTreatyComponentRecord(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default EffectBonusValueCampaignDiplomacyTreatyComponentRecords;
