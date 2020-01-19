import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace CommodityUnitNames {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly unit: string;
        readonly plural: string;
        readonly singular: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default CommodityUnitNames;
