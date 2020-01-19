import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { ProvincialResourceIds } from "./ProvincialResourceIds";
export declare namespace ProvincialResourcesBuildingLevelsPermissionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevelRecord: string;
        readonly _provincialResourceIdFlag: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevelRecord(): BuildingLevels.Entry | undefined;
        get provincialResourceIdFlag(): ProvincialResourceIds.Entry | undefined;
    }
}
export default ProvincialResourcesBuildingLevelsPermissionsJunctions;
