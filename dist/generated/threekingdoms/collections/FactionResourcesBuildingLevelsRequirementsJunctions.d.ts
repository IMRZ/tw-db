import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { FactionResourcesRequirementSets } from "./FactionResourcesRequirementSets";
export declare namespace FactionResourcesBuildingLevelsRequirementsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevelRecord: string;
        readonly _setId: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevelRecord(): BuildingLevels.Entry | undefined;
        get setId(): FactionResourcesRequirementSets.Entry | undefined;
    }
}
export default FactionResourcesBuildingLevelsRequirementsJunctions;
