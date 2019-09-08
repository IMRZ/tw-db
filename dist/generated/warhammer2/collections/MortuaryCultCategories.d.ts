import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MortuaryCultCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedName: string;
        readonly localisedDescription: string;
        readonly showOrder: number;
        readonly craftButtonText: string;
        readonly localisedButtonDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MortuaryCultCategories;
