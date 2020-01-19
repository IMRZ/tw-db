
import { CollectionCache, CollectionKey } from "../../../common";
import { CustomBattleSettlementBuildingGroups } from "./CustomBattleSettlementBuildingGroups";
import { BuildingLevels } from "./BuildingLevels";
import { BuildingSlotGroups } from "./BuildingSlotGroups";

export namespace CustomBattleSettlementBuildingGroupsToBuildings {
  export const KEY = new CollectionKey("custom_battle_settlement_building_groups_to_buildings");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingGroup: string;
    readonly _buildingLevel: string;
    readonly _buildingSlotGroup: string;
    readonly healthPercent: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingGroup = values["building_group"];
      this._buildingLevel = values["building_level"];
      this._buildingSlotGroup = values["building_slot_group"];
      this.healthPercent = values["health_percent"];
    }
    
    get buildingGroup(): CustomBattleSettlementBuildingGroups.Entry | undefined {
      const collection = <CustomBattleSettlementBuildingGroups.Entry[]>this.collectionCache.getCollection(CustomBattleSettlementBuildingGroups.KEY, CustomBattleSettlementBuildingGroups.Entry);
      return collection.find(entry => entry.key === this._buildingGroup);
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get buildingSlotGroup(): BuildingSlotGroups.Entry | undefined {
      const collection = <BuildingSlotGroups.Entry[]>this.collectionCache.getCollection(BuildingSlotGroups.KEY, BuildingSlotGroups.Entry);
      return collection.find(entry => entry.key === this._buildingSlotGroup);
    }
  }
}

export default CustomBattleSettlementBuildingGroupsToBuildings;
