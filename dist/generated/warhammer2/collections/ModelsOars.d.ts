import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ModelsOars {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly rigidModel: string;
        readonly leftRow: string;
        readonly leftEnd: string;
        readonly rightRow: string;
        readonly rightEnd: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ModelsOars;
