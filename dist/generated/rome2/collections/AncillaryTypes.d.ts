import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AncillaryTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        readonly uiIcon: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AncillaryTypes;
