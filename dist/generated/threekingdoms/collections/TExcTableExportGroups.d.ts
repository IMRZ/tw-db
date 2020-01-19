import { CollectionCache, CollectionKey } from "../../../common";
import { TExcTableExportCategories } from "./TExcTableExportCategories";
import { TExcImplementedTables } from "./TExcImplementedTables";
export declare namespace TExcTableExportGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly _category: string;
        readonly _table: string;
        constructor(collectionCache: CollectionCache, values: any);
        get category(): TExcTableExportCategories.Entry | undefined;
        get table(): TExcImplementedTables.Entry | undefined;
    }
}
export default TExcTableExportGroups;
