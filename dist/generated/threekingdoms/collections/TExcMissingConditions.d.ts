import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TExcMissingConditions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly id: number;
        readonly exportedScript: string;
        readonly condition: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TExcMissingConditions;
