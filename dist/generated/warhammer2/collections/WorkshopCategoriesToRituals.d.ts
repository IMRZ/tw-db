import { CollectionCache, CollectionKey } from "../../../common";
import { WorkshopCategories } from "./WorkshopCategories";
import { Rituals } from "./Rituals";
export declare namespace WorkshopCategoriesToRituals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _category: string;
        readonly _ritual: string;
        readonly order: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly category: WorkshopCategories.Entry | undefined;
        readonly ritual: Rituals.Entry | undefined;
    }
}
export default WorkshopCategoriesToRituals;
