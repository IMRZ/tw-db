import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ProcessesToRunAfterExportsOfTables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly tableName: string;
        readonly processPathFromBinaries: string;
        readonly additionalArguments: string;
        readonly passWorkspace: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ProcessesToRunAfterExportsOfTables;
