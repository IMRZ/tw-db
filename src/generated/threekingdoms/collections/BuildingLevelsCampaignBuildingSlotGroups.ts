
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { BuildingSlotGroups } from "./BuildingSlotGroups";
import { BmdExportTypes } from "./BmdExportTypes";
import { UiColours } from "./UiColours";

export namespace BuildingLevelsCampaignBuildingSlotGroups {
  export const KEY = new CollectionKey("building_levels_campaign_building_slot_groups");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevel: string;
    readonly _groupKey: string;
    readonly prefabName: string;
    readonly _levelBmdExportType: string;
    readonly _tintColour: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevel = values["building_level"];
      this._groupKey = values["group_key"];
      this.prefabName = values["prefab_name"];
      this._levelBmdExportType = values["level_bmd_export_type"];
      this._tintColour = values["tint_colour"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get groupKey(): BuildingSlotGroups.Entry | undefined {
      const collection = <BuildingSlotGroups.Entry[]>this.collectionCache.getCollection(BuildingSlotGroups.KEY, BuildingSlotGroups.Entry);
      return collection.find(entry => entry.key === this._groupKey);
    }
    
    get levelBmdExportType(): BmdExportTypes.Entry | undefined {
      const collection = <BmdExportTypes.Entry[]>this.collectionCache.getCollection(BmdExportTypes.KEY, BmdExportTypes.Entry);
      return collection.find(entry => entry.name === this._levelBmdExportType);
    }
    
    get tintColour(): UiColours.Entry | undefined {
      const collection = <UiColours.Entry[]>this.collectionCache.getCollection(UiColours.KEY, UiColours.Entry);
      return collection.find(entry => entry.key === this._tintColour);
    }
  }
}

export default BuildingLevelsCampaignBuildingSlotGroups;
