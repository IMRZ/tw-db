import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EncyclopediaTriggers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly componentKey: string;
        readonly url: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EncyclopediaTriggers;
