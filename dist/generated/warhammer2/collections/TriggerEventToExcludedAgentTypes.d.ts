import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace TriggerEventToExcludedAgentTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _event: any;
        readonly _agent: any;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default TriggerEventToExcludedAgentTypes;
