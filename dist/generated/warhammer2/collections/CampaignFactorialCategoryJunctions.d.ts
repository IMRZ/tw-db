import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignFactorialCategories } from "./CampaignFactorialCategories";
import { CampaignDesignControlledFactorialCategories } from "./CampaignDesignControlledFactorialCategories";
export declare namespace CampaignFactorialCategoryJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _codeCategory: string;
        readonly _designControlledCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
        get codeCategory(): CampaignFactorialCategories.Entry | undefined;
        get designControlledCategory(): CampaignDesignControlledFactorialCategories.Entry | undefined;
    }
}
export default CampaignFactorialCategoryJunctions;
