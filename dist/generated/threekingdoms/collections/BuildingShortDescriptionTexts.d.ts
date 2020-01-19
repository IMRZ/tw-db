import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BuildingShortDescriptionTexts {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly shortDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BuildingShortDescriptionTexts;
