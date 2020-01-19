import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace VictoryConditions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly condition: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default VictoryConditions;
