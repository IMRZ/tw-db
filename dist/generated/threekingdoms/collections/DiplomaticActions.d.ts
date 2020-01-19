import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DiplomaticActions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly category: string;
        readonly sortOrder: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DiplomaticActions;
