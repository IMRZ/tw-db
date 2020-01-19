import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsCampaignSeaRegionControlStatusRecords } from "./CampaignBonusValueIdsCampaignSeaRegionControlStatusRecords";
import { CampaignSeaRegionControlStatuses } from "./CampaignSeaRegionControlStatuses";
export declare namespace EffectBonusValueCampaignSeaRegionControlStatusRecordJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _campaignSeaRegionControlStatusRecord: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsCampaignSeaRegionControlStatusRecords.Entry | undefined;
        get campaignSeaRegionControlStatusRecord(): CampaignSeaRegionControlStatuses.Entry | undefined;
    }
}
export default EffectBonusValueCampaignSeaRegionControlStatusRecordJunctions;
