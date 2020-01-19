import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { CampaignMapTooltipStatuses } from "./CampaignMapTooltipStatuses";
export declare namespace CampaignSeaRegionControlStatuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly controlStatus: string;
        readonly _campaignGroup: string;
        readonly gdpTradePiracyPercentageModifier: number;
        readonly baseReplenishmentPercentageModifier: number;
        readonly additionalGarrisonedReplenishmentPercentageModifier: number;
        readonly additionalRecruitableReplenishmentPercentageModifier: number;
        readonly recruitmentCostPercentageModifier: number;
        readonly tooltip: string;
        readonly receivesFactionalReplenishmentBonusValues: boolean;
        readonly foreignSoilMoraleEffect: number;
        readonly _tooltipStatus: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignGroup(): CampaignGroups.Entry | undefined;
        get tooltipStatus(): CampaignMapTooltipStatuses.Entry | undefined;
    }
}
export default CampaignSeaRegionControlStatuses;
