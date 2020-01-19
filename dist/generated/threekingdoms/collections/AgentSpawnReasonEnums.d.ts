import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AgentSpawnReasonEnums {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AgentSpawnReasonEnums;
