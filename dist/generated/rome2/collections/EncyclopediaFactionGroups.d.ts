import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace EncyclopediaFactionGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly groupId: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default EncyclopediaFactionGroups;
