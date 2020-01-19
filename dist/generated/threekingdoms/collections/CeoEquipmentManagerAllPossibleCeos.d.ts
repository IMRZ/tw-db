import { CollectionCache, CollectionKey } from "../../../common";
import { CeoEquipmentManagers } from "./CeoEquipmentManagers";
import { CeoGroups } from "./CeoGroups";
export declare namespace CeoEquipmentManagerAllPossibleCeos {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _equipmentManager: string;
        readonly _includeCeoGroup: string;
        constructor(collectionCache: CollectionCache, values: any);
        get equipmentManager(): CeoEquipmentManagers.Entry | undefined;
        get includeCeoGroup(): CeoGroups.Entry | undefined;
    }
}
export default CeoEquipmentManagerAllPossibleCeos;
