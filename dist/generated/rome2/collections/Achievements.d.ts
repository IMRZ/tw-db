import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Achievements {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly title: string;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Achievements;
