import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CdirEventsPostGenerationConditions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly conditionKey: string;
        readonly notes: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CdirEventsPostGenerationConditions;
