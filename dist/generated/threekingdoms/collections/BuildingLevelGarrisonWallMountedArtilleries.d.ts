import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { MainUnits } from "./MainUnits";
export declare namespace BuildingLevelGarrisonWallMountedArtilleries {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevel: string;
        readonly _artilleryUnit: string;
        readonly amount: number;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get artilleryUnit(): MainUnits.Entry | undefined;
    }
}
export default BuildingLevelGarrisonWallMountedArtilleries;
