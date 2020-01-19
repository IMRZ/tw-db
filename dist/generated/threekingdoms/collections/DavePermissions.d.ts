import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DavePermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly permission: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DavePermissions;
