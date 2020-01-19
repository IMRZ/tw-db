import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ProvincialResourceIds {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly provincialResourceFlag: string;
        readonly localisedDescription: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ProvincialResourceIds;
