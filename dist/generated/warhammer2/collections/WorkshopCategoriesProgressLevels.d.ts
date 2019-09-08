import { CollectionCache, CollectionKey } from "../../../common";
import { WorkshopCategories } from "./WorkshopCategories";
import { Ancillaries } from "./Ancillaries";
import { MainUnits } from "./MainUnits";
export declare namespace WorkshopCategoriesProgressLevels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _category: string;
        readonly levelToUnlock: number;
        readonly _ancillaryReward: string;
        readonly _unitReward: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: WorkshopCategories.Entry | undefined;
        readonly ancillaryReward: Ancillaries.Entry | undefined;
        readonly unitReward: MainUnits.Entry | undefined;
    }
}
export default WorkshopCategoriesProgressLevels;
