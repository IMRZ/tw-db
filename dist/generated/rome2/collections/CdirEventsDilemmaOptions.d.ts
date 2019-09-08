import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CdirEventsDilemmaOptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly optionKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CdirEventsDilemmaOptions;
