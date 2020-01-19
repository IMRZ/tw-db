import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquipmentManagers } from "./CeoEquipmentManagers";
import { CeoEquipmentCategoryManagers } from "./CeoEquipmentCategoryManagers";
export declare namespace CeoEquipmentManagerToCategoryManagers {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _equipmentManager: string;
        readonly _categoryManager: string;
        readonly autoId: number;
        constructor(collectionCache: CollectionCache, values: any);
        get equipmentManager(): CeoEquipmentManagers.Entry | undefined;
        get categoryManager(): CeoEquipmentCategoryManagers.Entry | undefined;
    }
}
export default CeoEquipmentManagerToCategoryManagers;
