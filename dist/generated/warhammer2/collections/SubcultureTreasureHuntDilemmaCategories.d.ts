import { CollectionCache, CollectionKey } from "../../../common";
import { CulturesSubcultures } from "./CulturesSubcultures";
import { CdirEventsCategories } from "./CdirEventsCategories";
export declare namespace SubcultureTreasureHuntDilemmaCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subculture: string;
        readonly _category: string;
        constructor(collectionCache: CollectionCache, values: any);
        get subculture(): CulturesSubcultures.Entry | undefined;
        get category(): CdirEventsCategories.Entry | undefined;
    }
}
export default SubcultureTreasureHuntDilemmaCategories;
