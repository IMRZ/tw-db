import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignGroups } from "./CampaignGroups";
import { Cultures } from "./Cultures";
export declare namespace CampaignGroupAbandonedCulturesOverrides {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _campaignGroup: string;
        readonly _culture: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly campaignGroup: CampaignGroups.Entry | undefined;
        readonly culture: Cultures.Entry | undefined;
    }
}
export default CampaignGroupAbandonedCulturesOverrides;
