import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiCharacterAssignmentCategories {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedTitle: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiCharacterAssignmentCategories;
