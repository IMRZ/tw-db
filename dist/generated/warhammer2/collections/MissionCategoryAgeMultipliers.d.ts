import { CollectionCache, CollectionKey } from "../../../common";
import { CdirEventsCategories } from "./CdirEventsCategories";
export declare namespace MissionCategoryAgeMultipliers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _category: string;
        readonly key: string;
        readonly turnThreshold: number;
        readonly multiplier: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: CdirEventsCategories.Entry | undefined;
    }
}
export default MissionCategoryAgeMultipliers;
