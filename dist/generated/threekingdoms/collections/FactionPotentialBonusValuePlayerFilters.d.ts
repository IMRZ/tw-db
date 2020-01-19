import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace FactionPotentialBonusValuePlayerFilters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly player: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default FactionPotentialBonusValuePlayerFilters;
