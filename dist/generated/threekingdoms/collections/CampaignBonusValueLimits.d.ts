import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignBonusValueCategories } from "./CampaignBonusValueCategories";
export declare namespace CampaignBonusValueLimits {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _category: string;
        readonly id: string;
        readonly minValue: number;
        readonly maxValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): CampaignBonusValueCategories.Entry | undefined;
    }
}
export default CampaignBonusValueLimits;
