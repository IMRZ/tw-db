import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ModelsSieges {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly modelFile: string;
        readonly logicFile: string;
        readonly displayPath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ModelsSieges;
