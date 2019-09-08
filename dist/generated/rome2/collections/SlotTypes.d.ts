import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace SlotTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly canDestroy: boolean;
        readonly canConvert: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default SlotTypes;
