import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DynastyUpgradeTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly type: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DynastyUpgradeTypes;
