import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { ProvincialResourcesRequirementSets } from "./ProvincialResourcesRequirementSets";
export declare namespace ProvincialResourcesBuildingLevelsRequirementsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevelRecord: string;
        readonly _setId: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevelRecord(): BuildingLevels.Entry | undefined;
        get setId(): ProvincialResourcesRequirementSets.Entry | undefined;
    }
}
export default ProvincialResourcesBuildingLevelsRequirementsJunctions;
