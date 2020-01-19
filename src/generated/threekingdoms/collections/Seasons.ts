
import { CollectionCache, CollectionKey } from "../../../common";


export namespace Seasons {
  export const KEY = new CollectionKey("seasons");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly season: string;
    readonly onscreen: string;
    readonly longname: string;
    readonly shortname: string;
    readonly index: number;
    readonly default: boolean;
    readonly battleDefault: boolean;
    readonly convertRainToSnow: boolean;
    readonly convertSnowToRain: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.season = values["season"];
      this.onscreen = values["onscreen"];
      this.longname = values["longname"];
      this.shortname = values["shortname"];
      this.index = values["index"];
      this.default = !!values["default"];
      this.battleDefault = !!values["battle_default"];
      this.convertRainToSnow = !!values["convert_rain_to_snow"];
      this.convertSnowToRain = !!values["convert_snow_to_rain"];
    }
    
  }
}

export default Seasons;
