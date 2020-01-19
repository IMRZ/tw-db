import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignFactorialCategoryJunctions } from "./CampaignFactorialCategoryJunctions";
import { CampaignFactorialUiInfos } from "./CampaignFactorialUiInfos";
export declare namespace FactorialEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _category: string;
        readonly _uiInfos: string;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): CampaignFactorialCategoryJunctions.Entry | undefined;
        get uiInfos(): CampaignFactorialUiInfos.Entry | undefined;
    }
}
export default FactorialEffects;
