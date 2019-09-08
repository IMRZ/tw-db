import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CampaignUnitStatBonuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly bonus: string;
        readonly level: number;
        readonly threshold: number;
        readonly description: string;
        readonly iconPath: string;
        readonly upgradeCostNew: number;
        readonly upgradeCostFromPreviousLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CampaignUnitStatBonuses;
