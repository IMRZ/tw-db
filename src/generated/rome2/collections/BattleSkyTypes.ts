
import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";

export namespace BattleSkyTypes {
  export const KEY = new CollectionKey("battle_sky_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _season: any;
    readonly _weatherType: any;
    readonly timeOfDay: string;
    readonly _climate: string;
    readonly skyFile: string;
    readonly supportsAmbientFog: boolean;
    readonly supportsVolumetricFog: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._season = values["season"];
      this._weatherType = values["weather_type"];
      this.timeOfDay = values["time_of_day"];
      this._climate = values["climate"];
      this.skyFile = values["sky_file"];
      this.supportsAmbientFog = !!values["supports_ambient_fog"];
      this.supportsVolumetricFog = !!values["supports_volumetric_fog"];
    }
    
    get climate(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._climate);
    }
  }
}

export default BattleSkyTypes;
