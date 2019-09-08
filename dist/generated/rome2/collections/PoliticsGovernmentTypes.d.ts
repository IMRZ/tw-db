import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace PoliticsGovernmentTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly governmentType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default PoliticsGovernmentTypes;
