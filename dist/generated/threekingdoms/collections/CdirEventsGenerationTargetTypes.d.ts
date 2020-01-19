import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CdirEventsGenerationTargetTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly targetType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CdirEventsGenerationTargetTypes;
