import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace WarscapeEquipmentItems {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly equipmentItem: string;
        readonly equipmentKey: string;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default WarscapeEquipmentItems;
