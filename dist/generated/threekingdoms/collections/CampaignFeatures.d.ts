import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignFeatureIds } from "./CampaignFeatureIds";
import { CampaignGroups } from "./CampaignGroups";
export declare namespace CampaignFeatures {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _feature: string;
        readonly _group: string;
        readonly available: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get feature(): CampaignFeatureIds.Entry | undefined;
        get group(): CampaignGroups.Entry | undefined;
    }
}
export default CampaignFeatures;
