import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SlotsTemplatesModels {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly templateName: string;
        readonly modelFilename: string;
        readonly modelFilepath: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SlotsTemplatesModels;
