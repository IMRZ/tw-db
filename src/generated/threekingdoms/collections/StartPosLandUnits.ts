
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { StartPosCharacters } from "./StartPosCharacters";

export namespace StartPosLandUnits {
  export const KEY = new CollectionKey("start_pos_land_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _unitType: string;
    readonly _general: number;
    readonly soldiers: number;
    readonly unique: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._unitType = values["unit_type"];
      this._general = values["general"];
      this.soldiers = values["soldiers"];
      this.unique = !!values["unique"];
    }
    
    get unitType(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitType);
    }
    
    get general(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._general);
    }
  }
}

export default StartPosLandUnits;
