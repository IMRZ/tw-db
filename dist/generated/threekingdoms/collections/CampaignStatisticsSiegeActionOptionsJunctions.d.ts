import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
import { SettlementSiegeActionOptions } from "./SettlementSiegeActionOptions";
export declare namespace CampaignStatisticsSiegeActionOptionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignStatistics: string;
        readonly _seigeActionOption: string;
        constructor(collectionCache: CollectionCache, values: any);
        get campaignStatistics(): CampaignStatisticsEnums.Entry | undefined;
        get seigeActionOption(): SettlementSiegeActionOptions.Entry | undefined;
    }
}
export default CampaignStatisticsSiegeActionOptionsJunctions;
