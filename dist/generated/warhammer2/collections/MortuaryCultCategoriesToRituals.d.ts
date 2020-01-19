import { CollectionCache, CollectionKey } from "../../../common";
import { MortuaryCultCategories } from "./MortuaryCultCategories";
import { Rituals } from "./Rituals";
export declare namespace MortuaryCultCategoriesToRituals {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _mortuaryCategory: string;
        readonly _ritual: string;
        constructor(collectionCache: CollectionCache, values: any);
        get mortuaryCategory(): MortuaryCultCategories.Entry | undefined;
        get ritual(): Rituals.Entry | undefined;
    }
}
export default MortuaryCultCategoriesToRituals;
