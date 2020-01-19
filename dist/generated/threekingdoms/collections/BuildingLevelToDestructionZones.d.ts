import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { DestructionZoneMaskTypes } from "./DestructionZoneMaskTypes";
export declare namespace BuildingLevelToDestructionZones {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevel: string;
        readonly _destructionZoneType: string;
        readonly destructionZoneProportion: number;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get destructionZoneType(): DestructionZoneMaskTypes.Entry | undefined;
    }
}
export default BuildingLevelToDestructionZones;
