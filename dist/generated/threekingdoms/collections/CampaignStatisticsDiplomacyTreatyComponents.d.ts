import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsStrings } from "./CampaignStatisticsStrings";
import { CampaignDiplomacyTreatyComponents } from "./CampaignDiplomacyTreatyComponents";
export declare namespace CampaignStatisticsDiplomacyTreatyComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _statistic: string;
        readonly _diplomacyTreatyComponent: string;
        readonly countOnlyWhenProposed: boolean;
        readonly maxValue: boolean;
        readonly countOnlyWhenReceived: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get statistic(): CampaignStatisticsStrings.Entry | undefined;
        get diplomacyTreatyComponent(): CampaignDiplomacyTreatyComponents.Entry | undefined;
    }
}
export default CampaignStatisticsDiplomacyTreatyComponents;
