import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UiColourProfiles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedName: string;
        readonly localisedDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UiColourProfiles;
