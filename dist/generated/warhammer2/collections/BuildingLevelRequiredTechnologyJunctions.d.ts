import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { Technologies } from "./Technologies";
export declare namespace BuildingLevelRequiredTechnologyJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevelKey: string;
        readonly _technologyKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly buildingLevelKey: BuildingLevels.Entry | undefined;
        readonly technologyKey: Technologies.Entry | undefined;
    }
}
export default BuildingLevelRequiredTechnologyJunctions;
