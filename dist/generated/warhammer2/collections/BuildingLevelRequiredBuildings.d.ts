import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace BuildingLevelRequiredBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevel: string;
        readonly _required: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly buildingLevel: BuildingLevels.Entry | undefined;
        readonly required: BuildingLevels.Entry | undefined;
    }
}
export default BuildingLevelRequiredBuildings;
