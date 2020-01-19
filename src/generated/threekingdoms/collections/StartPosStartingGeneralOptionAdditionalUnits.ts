
import { CollectionCache, CollectionKey } from "../../../common";
import { StartPosStartingGeneralOptions } from "./StartPosStartingGeneralOptions";
import { MainUnits } from "./MainUnits";

export namespace StartPosStartingGeneralOptionAdditionalUnits {
  export const KEY = new CollectionKey("start_pos_starting_general_option_additional_units");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _general: number;
    readonly _unit: string;
    readonly percentSoldiers: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._general = values["general"];
      this._unit = values["unit"];
      this.percentSoldiers = values["percent_soldiers"];
    }
    
    get general(): StartPosStartingGeneralOptions.Entry | undefined {
      const collection = <StartPosStartingGeneralOptions.Entry[]>this.collectionCache.getCollection(StartPosStartingGeneralOptions.KEY, StartPosStartingGeneralOptions.Entry);
      return collection.find(entry => entry.id === this._general);
    }
    
    get unit(): MainUnits.Entry | undefined {
      const collection = <MainUnits.Entry[]>this.collectionCache.getCollection(MainUnits.KEY, MainUnits.Entry);
      return collection.find(entry => entry.unit === this._unit);
    }
  }
}

export default StartPosStartingGeneralOptionAdditionalUnits;
