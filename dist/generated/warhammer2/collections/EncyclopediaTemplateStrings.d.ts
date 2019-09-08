import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EncyclopediaTemplateStrings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly stringKey: string;
        readonly text: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EncyclopediaTemplateStrings;
