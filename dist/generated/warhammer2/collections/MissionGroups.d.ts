import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MissionGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly groupKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MissionGroups;
