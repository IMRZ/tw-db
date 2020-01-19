import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CdirEventsTargets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly targetKey: string;
        readonly description: string;
        readonly isPrimary: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CdirEventsTargets;
