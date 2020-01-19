import { CollectionCache, CollectionKey } from "../../../common";
import { TExcImplementedTables } from "./TExcImplementedTables";
export declare namespace DaveRestrictedTables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _tableName: string;
        constructor(collectionCache: CollectionCache, values: any);
        get tableName(): TExcImplementedTables.Entry | undefined;
    }
}
export default DaveRestrictedTables;
