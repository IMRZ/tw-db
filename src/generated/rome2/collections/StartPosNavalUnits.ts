
import { CollectionCache, CollectionKey } from "../../../common";
import { MainUnits } from "./MainUnits";
import { StartPosCharacters } from "./StartPosCharacters";

export namespace StartPosNavalUnits {
  export const KEY = new CollectionKey("start_pos_naval_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _unitType: string;
    readonly _admiral: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["ID"];
      this._unitType = values["unit_type"];
      this._admiral = values["admiral"];
    }
    
    get unitType(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unitType);
    }
    
    get admiral(): StartPosCharacters.Entry | undefined {
      const collection = <StartPosCharacters.Entry[]>this.collectionCache.getCollection(StartPosCharacters.KEY, StartPosCharacters.Entry);
      return collection.find(entry => entry.id === this._admiral);
    }
  }
}

export default StartPosNavalUnits;
