
import { CollectionCache, CollectionKey } from "../../../common";
import { BuildingLevels } from "./BuildingLevels";
import { CaiPersonalityStrategicComponents } from "./CaiPersonalityStrategicComponents";

export namespace CaiPersonalityStrategicBuildingValues {
  export const KEY = new CollectionKey("cai_personality_strategic_building_values");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _buildingLevel: string;
    readonly multiplier: number;
    readonly _strategicComponent: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._buildingLevel = values["building_level"];
      this.multiplier = values["multiplier"];
      this._strategicComponent = values["strategic_component"];
    }
    
    get buildingLevel(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._buildingLevel);
    }
    
    get strategicComponent(): CaiPersonalityStrategicComponents.Entry | undefined {
      const collection = <CaiPersonalityStrategicComponents.Entry[]>this.collectionCache.getCollection(CaiPersonalityStrategicComponents.KEY, CaiPersonalityStrategicComponents.Entry);
      return collection.find(entry => entry.id === this._strategicComponent);
    }
  }
}

export default CaiPersonalityStrategicBuildingValues;
