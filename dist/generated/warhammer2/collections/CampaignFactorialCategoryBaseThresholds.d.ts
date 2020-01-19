import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignFactorialCategoryJunctions } from "./CampaignFactorialCategoryJunctions";
export declare namespace CampaignFactorialCategoryBaseThresholds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _category: string;
        readonly baseThreshold: number;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): CampaignFactorialCategoryJunctions.Entry | undefined;
    }
}
export default CampaignFactorialCategoryBaseThresholds;
