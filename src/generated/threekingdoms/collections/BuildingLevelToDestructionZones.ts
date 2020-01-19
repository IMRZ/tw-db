
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { DestructionZoneMaskTypes } from "./DestructionZoneMaskTypes";

export namespace BuildingLevelToDestructionZones {
  export const KEY = new CollectionKey("building_level_to_destruction_zones");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevel: string;
    readonly _destructionZoneType: string;
    readonly destructionZoneProportion: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevel = values["building_level"];
      this._destructionZoneType = values["destruction_zone_type"];
      this.destructionZoneProportion = values["destruction_zone_proportion"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get destructionZoneType(): DestructionZoneMaskTypes.Entry | undefined {
      const collection = <DestructionZoneMaskTypes.Entry[]>this.collectionCache.getCollection(DestructionZoneMaskTypes.KEY, DestructionZoneMaskTypes.Entry);
      return collection.find(entry => entry.key === this._destructionZoneType);
    }
  }
}

export default BuildingLevelToDestructionZones;
