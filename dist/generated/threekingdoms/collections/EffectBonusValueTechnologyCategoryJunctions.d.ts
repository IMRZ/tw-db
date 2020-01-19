import { CollectionCache, CollectionKey } from "../../../common";
import { Effects } from "./Effects";
import { CampaignBonusValueIdsTechnologyCategories } from "./CampaignBonusValueIdsTechnologyCategories";
import { TechnologyCategories } from "./TechnologyCategories";
export declare namespace EffectBonusValueTechnologyCategoryJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _effect: string;
        readonly _bonusValueId: string;
        readonly _technologyCategory: string;
        constructor(collectionCache: CollectionCache, values: any);
        get effect(): Effects.Entry | undefined;
        get bonusValueId(): CampaignBonusValueIdsTechnologyCategories.Entry | undefined;
        get technologyCategory(): TechnologyCategories.Entry | undefined;
    }
}
export default EffectBonusValueTechnologyCategoryJunctions;
