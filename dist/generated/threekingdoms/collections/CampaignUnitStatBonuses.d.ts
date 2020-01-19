import { CollectionCache, CollectionKey } from "../../../common";
import { CampaignUnitStatBonusTypes } from "./CampaignUnitStatBonusTypes";
export declare namespace CampaignUnitStatBonuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _bonus: string;
        readonly level: number;
        readonly threshold: number;
        readonly description: string;
        readonly iconPath: string;
        readonly upgradeCostNew: number;
        readonly upgradeCostFromPreviousLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        get bonus(): CampaignUnitStatBonusTypes.Entry | undefined;
    }
}
export default CampaignUnitStatBonuses;
