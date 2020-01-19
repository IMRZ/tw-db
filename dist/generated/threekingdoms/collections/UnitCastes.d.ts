import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace UnitCastes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly caste: string;
        readonly localisedName: string;
        readonly sortPriority: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default UnitCastes;
