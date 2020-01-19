import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";
export declare namespace CeoEquippedSetBonuses {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _location: string;
        readonly title: string;
        readonly description: string;
        readonly iconPath: string;
        constructor(collectionCache: CollectionCache, values: any);
        get location(): CeoEquipmentManagerTypes.Entry | undefined;
    }
}
export default CeoEquippedSetBonuses;
