import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CaiPersonalityStrategicComponents } from "./CaiPersonalityStrategicComponents";
export declare namespace CaiPersonalityStrategicBuildingValues {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevel: string;
        readonly multiplier: number;
        readonly _strategicComponent: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get strategicComponent(): CaiPersonalityStrategicComponents.Entry | undefined;
    }
}
export default CaiPersonalityStrategicBuildingValues;
