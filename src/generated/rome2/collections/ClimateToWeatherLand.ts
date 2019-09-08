
import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
import { Seasons } from "./Seasons";

export namespace ClimateToWeatherLand {
  export const KEY = new CollectionKey("climate_to_weather_land");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _climateType: string;
    readonly _season: string;
    readonly dry: number;
    readonly dusty: number;
    readonly sandstorm: number;
    readonly drizzle: number;
    readonly lightRain: number;
    readonly moderateRain: number;
    readonly heavyRain: number;
    readonly storm: number;
    readonly lightSnow: number;
    readonly moderateSnow: number;
    readonly heavySnow: number;
    readonly blizzard: number;
    readonly heatFatigue: number;
    readonly coldFatigue: number;
    readonly hazeIndex: number;
    readonly fogIndex: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._climateType = values["Climate_type"];
      this._season = values["season"];
      this.dry = values["Dry"];
      this.dusty = values["Dusty"];
      this.sandstorm = values["Sandstorm"];
      this.drizzle = values["Drizzle"];
      this.lightRain = values["Light_rain"];
      this.moderateRain = values["Moderate_rain"];
      this.heavyRain = values["Heavy_rain"];
      this.storm = values["Storm"];
      this.lightSnow = values["Light_snow"];
      this.moderateSnow = values["Moderate_snow"];
      this.heavySnow = values["Heavy_snow"];
      this.blizzard = values["Blizzard"];
      this.heatFatigue = values["Heat_fatigue"];
      this.coldFatigue = values["Cold_fatigue"];
      this.hazeIndex = values["Haze_index"];
      this.fogIndex = values["Fog_index"];
    }
    
    get climateType(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._climateType);
    }
    
    get season(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._season);
    }
  }
}

export default ClimateToWeatherLand;
