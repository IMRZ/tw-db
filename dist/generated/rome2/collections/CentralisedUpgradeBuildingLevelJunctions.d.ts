import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
export declare namespace CentralisedUpgradeBuildingLevelJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _upgradedBuildingLevel: string;
        readonly _centralBuildingLevel: string;
        readonly priority: number;
        constructor(collectionCache: CollectionCache, values: any);
        get upgradedBuildingLevel(): BuildingLevels.Entry | undefined;
        get centralBuildingLevel(): BuildingLevels.Entry | undefined;
    }
}
export default CentralisedUpgradeBuildingLevelJunctions;
