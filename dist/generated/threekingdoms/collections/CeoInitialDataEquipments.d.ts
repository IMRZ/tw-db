import { CollectionCache, CollectionKey } from "../../../common";
import { CeoInitialDataStages } from "./CeoInitialDataStages";
import { CeoCategories } from "./CeoCategories";
import { Ceos } from "./Ceos";
import { CeoEquipmentManagerTypes } from "./CeoEquipmentManagerTypes";
export declare namespace CeoInitialDataEquipments {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _initialDataStage: string;
        readonly _category: string;
        readonly slotIndex: number;
        readonly _equippedCeo: string;
        readonly autoId: number;
        readonly _target: string;
        constructor(collectionCache: CollectionCache, values: any);
        get initialDataStage(): CeoInitialDataStages.Entry | undefined;
        get category(): CeoCategories.Entry | undefined;
        get equippedCeo(): Ceos.Entry | undefined;
        get target(): CeoEquipmentManagerTypes.Entry | undefined;
    }
}
export default CeoInitialDataEquipments;
