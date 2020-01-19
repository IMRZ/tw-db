import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsRegionGdpTypes } from "./CampaignBonusValueIdsRegionGdpTypes";
import { CampaignRegionGdpTypes } from "./CampaignRegionGdpTypes";
export declare namespace EffectBonusValueRegionGdpTypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _regionGdpType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsRegionGdpTypes.Entry | undefined;
        get regionGdpType(): CampaignRegionGdpTypes.Entry | undefined;
    }
}
export default EffectBonusValueRegionGdpTypeJunctions;
