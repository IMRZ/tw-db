import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace GovernmentTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly governmentType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default GovernmentTypes;
