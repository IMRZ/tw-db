import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { PrefabTypes } from "./PrefabTypes";
export declare namespace BuildingLevelToCampaignMapPrefabTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingLevel: string;
        readonly _prefabType: string;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get prefabType(): PrefabTypes.Entry | undefined;
    }
}
export default BuildingLevelToCampaignMapPrefabTypes;
