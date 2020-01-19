import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TexcSpreadsheets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly spreadsheet: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TexcSpreadsheets;
