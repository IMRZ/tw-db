import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace DiplomacyComponents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly component: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default DiplomacyComponents;
