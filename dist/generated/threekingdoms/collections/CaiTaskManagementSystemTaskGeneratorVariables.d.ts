import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CaiTaskManagementSystemTaskGeneratorVariables {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly defaultValue: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CaiTaskManagementSystemTaskGeneratorVariables;
