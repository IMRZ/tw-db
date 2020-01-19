import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BuildingSuperchains {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly name: string;
        readonly description: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BuildingSuperchains;
