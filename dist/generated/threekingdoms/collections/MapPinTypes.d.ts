import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MapPinTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly localisedDescription: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MapPinTypes;
