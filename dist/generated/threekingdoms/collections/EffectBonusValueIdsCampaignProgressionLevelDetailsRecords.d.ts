import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCampaignProgressionLevelDetailsRecords } from "./CampaignBonusValueIdsCampaignProgressionLevelDetailsRecords";
import { CampaignProgressionLevelDetails } from "./CampaignProgressionLevelDetails";
export declare namespace EffectBonusValueIdsCampaignProgressionLevelDetailsRecords {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _campaignProgressionLevelDetailsRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsCampaignProgressionLevelDetailsRecords.Entry | undefined;
        get campaignProgressionLevelDetailsRecord(): CampaignProgressionLevelDetails.Entry | undefined;
    }
}
export default EffectBonusValueIdsCampaignProgressionLevelDetailsRecords;
