import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignStatisticsEnums } from "./CampaignStatisticsEnums";
import { CampaignStatisticsAffixes } from "./CampaignStatisticsAffixes";
import { CulturesSubcultures } from "./CulturesSubcultures";
export declare namespace CampaignStatisticsAffixesJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _statistic: string;
        readonly _affix: string;
        readonly _subculture: string;
        constructor(collectionCache: CollectionCache, values: any);
        get statistic(): CampaignStatisticsEnums.Entry | undefined;
        get affix(): CampaignStatisticsAffixes.Entry | undefined;
        get subculture(): CulturesSubcultures.Entry | undefined;
    }
}
export default CampaignStatisticsAffixesJunctions;
