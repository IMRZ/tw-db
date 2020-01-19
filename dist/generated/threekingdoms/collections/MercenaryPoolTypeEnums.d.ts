import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace MercenaryPoolTypeEnums {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly poolType: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default MercenaryPoolTypeEnums;
