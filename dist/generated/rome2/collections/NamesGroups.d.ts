import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace NamesGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: string;
        readonly description: string;
        readonly key: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default NamesGroups;
