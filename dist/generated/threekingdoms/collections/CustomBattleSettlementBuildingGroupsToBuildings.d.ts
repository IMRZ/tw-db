import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleSettlementBuildingGroups } from "./CustomBattleSettlementBuildingGroups";
import { BuildingLevels } from "./BuildingLevels";
import { BuildingSlotGroups } from "./BuildingSlotGroups";
export declare namespace CustomBattleSettlementBuildingGroupsToBuildings {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _buildingGroup: string;
        readonly _buildingLevel: string;
        readonly _buildingSlotGroup: string;
        readonly healthPercent: number;
        constructor(collectionCache: CollectionCache, values: any);
        get buildingGroup(): CustomBattleSettlementBuildingGroups.Entry | undefined;
        get buildingLevel(): BuildingLevels.Entry | undefined;
        get buildingSlotGroup(): BuildingSlotGroups.Entry | undefined;
    }
}
export default CustomBattleSettlementBuildingGroupsToBuildings;
