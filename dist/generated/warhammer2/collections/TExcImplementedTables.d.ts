import { CollectionCache, CollectionKey } from "../../../common";
import { TExcPackCategories } from "./TExcPackCategories";
export declare namespace TExcImplementedTables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly tableName: string;
        readonly designer: string;
        readonly implemented: boolean;
        readonly implementer: string;
        readonly modified: boolean;
        readonly _destinationPack: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly destinationPack: TExcPackCategories.Entry | undefined;
    }
}
export default TExcImplementedTables;
