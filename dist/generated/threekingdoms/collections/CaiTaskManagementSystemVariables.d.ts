import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiTaskManagementSystemVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly defaultValue: number;
        readonly description: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiTaskManagementSystemVariables;
