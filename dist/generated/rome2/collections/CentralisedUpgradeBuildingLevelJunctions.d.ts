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
        readonly upgradedBuildingLevel: BuildingLevels.Entry | undefined;
        readonly centralBuildingLevel: BuildingLevels.Entry | undefined;
    }
}
export default CentralisedUpgradeBuildingLevelJunctions;
