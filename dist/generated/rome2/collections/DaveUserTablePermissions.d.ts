import { CollectionCache, CollectionKey } from "../../../common";
import { TExcImplementedTables } from "./TExcImplementedTables";
import { DavePermissions } from "./DavePermissions";
export declare namespace DaveUserTablePermissions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly userName: string;
        readonly _tableName: string;
        readonly _permission: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly tableName: TExcImplementedTables.Entry | undefined;
        readonly permission: DavePermissions.Entry | undefined;
    }
}
export default DaveUserTablePermissions;
