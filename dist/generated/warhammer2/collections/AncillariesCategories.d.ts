import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AncillariesCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly category: string;
        readonly onscreenName: string;
        readonly iconName: string;
        readonly sortOrder: number;
        readonly defaultEntryName: string;
        readonly defaultEntryTooltip: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AncillariesCategories;
