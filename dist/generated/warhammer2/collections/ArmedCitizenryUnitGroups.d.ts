import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace ArmedCitizenryUnitGroups {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly unitGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default ArmedCitizenryUnitGroups;
