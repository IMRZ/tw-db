import { CollectionCache, CollectionKey } from "../../../common";
import { TExcImplementedTables } from "./TExcImplementedTables";
export declare namespace TExcLocalisableFields {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: number;
        readonly _tableName: string;
        readonly field: string;
        readonly destinationFile: string;
        readonly readyForExport: boolean;
        readonly spreadsheet: string;
        readonly fieldAsKey: string;
        readonly forVo: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        get tableName(): TExcImplementedTables.Entry | undefined;
    }
}
export default TExcLocalisableFields;
