
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosCharacters } from "./StartPosCharacters";
import { BuildingLevels } from "./BuildingLevels";

export namespace StartPosHordeDetails {
  export const KEY = new CollectionKey("start_pos_horde_details");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _general: number;
    readonly startingDevPoints: number;
    readonly _primaryBuilding: string;
    readonly _secondaryBuilding1: string;
    readonly _secondaryBuilding2: string;
    readonly _secondaryBuilding3: string;
    readonly _secondaryBuilding4: string;
    readonly _secondaryBuilding5: string;
    readonly _secondaryBuilding6: string;
    readonly _secondaryBuilding7: string;
    readonly _secondaryBuilding8: string;
    readonly _secondaryBuilding9: string;
    readonly _secondaryBuilding10: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._general = values["general"];
      this.startingDevPoints = values["starting_dev_points"];
      this._primaryBuilding = values["primary_building"];
      this._secondaryBuilding1 = values["secondary_building_1"];
      this._secondaryBuilding2 = values["secondary_building_2"];
      this._secondaryBuilding3 = values["secondary_building_3"];
      this._secondaryBuilding4 = values["secondary_building_4"];
      this._secondaryBuilding5 = values["secondary_building_5"];
      this._secondaryBuilding6 = values["secondary_building_6"];
      this._secondaryBuilding7 = values["secondary_building_7"];
      this._secondaryBuilding8 = values["secondary_building_8"];
      this._secondaryBuilding9 = values["secondary_building_9"];
      this._secondaryBuilding10 = values["secondary_building_10"];
    }
    
    get general(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._general);
    }
    
    get primaryBuilding(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._primaryBuilding);
    }
    
    get secondaryBuilding1(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding1);
    }
    
    get secondaryBuilding2(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding2);
    }
    
    get secondaryBuilding3(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding3);
    }
    
    get secondaryBuilding4(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding4);
    }
    
    get secondaryBuilding5(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding5);
    }
    
    get secondaryBuilding6(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding6);
    }
    
    get secondaryBuilding7(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding7);
    }
    
    get secondaryBuilding8(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding8);
    }
    
    get secondaryBuilding9(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding9);
    }
    
    get secondaryBuilding10(): BuildingLevels.Entry | undefined {
      const collection = <BuildingLevels.Entry[]>this.collectionCache.getCollection(BuildingLevels.KEY, BuildingLevels.Entry);
      return collection.find(entry => entry.levelName === this._secondaryBuilding10);
    }
  }
}

export default StartPosHordeDetails;
