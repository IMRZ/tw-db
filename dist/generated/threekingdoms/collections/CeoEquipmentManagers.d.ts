import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";
export declare namespace CeoEquipmentManagers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _existsInLocation: string;
        constructor(collectionCache: CollectionCache, values: any);
        get existsInLocation(): CeoEquipmentManagerTypes.Entry | undefined;
    }
}
export default CeoEquipmentManagers;
