import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { FactionResourceIds } from "./FactionResourceIds";
export declare namespace FactionResourcesBuildingLevelsPermissionsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevelRecord: string;
        readonly _factionResourceIdFlag: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevelRecord(): BuildingLevels.Entry | undefined;
        get factionResourceIdFlag(): FactionResourceIds.Entry | undefined;
    }
}
export default FactionResourcesBuildingLevelsPermissionsJunctions;
