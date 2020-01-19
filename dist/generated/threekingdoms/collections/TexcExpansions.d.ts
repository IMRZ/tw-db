import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TexcExpansions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly expansion: string;
        readonly description: string;
        readonly packFilenameExtension: string;
        readonly released: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TexcExpansions;
