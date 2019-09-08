
import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
import { Seasons } from "./Seasons";
import { BattleWeatherTypes } from "./BattleWeatherTypes";

export namespace BattleClimateWeatherDescriptions {
  export const KEY = new CollectionKey("battle_climate_weather_descriptions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _climateType: string;
    readonly _season: string;
    readonly _weatherType: string;
    readonly probability: number;
    readonly heatFatigue: number;
    readonly coldFatigue: number;
    readonly spottingScalar: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._climateType = values["climate_type"];
      this._season = values["season"];
      this._weatherType = values["weather_type"];
      this.probability = values["probability"];
      this.heatFatigue = values["heat_fatigue"];
      this.coldFatigue = values["cold_fatigue"];
      this.spottingScalar = values["spotting_scalar"];
    }
    
    get climateType(): Climates.Entry | undefined {
      const collection = <Climates.Entry[]>this.collectionCache.getCollection(Climates.KEY, Climates.Entry);
      return collection.find(entry => entry.climateType === this._climateType);
    }
    
    get season(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._season);
    }
    
    get weatherType(): BattleWeatherTypes.Entry | undefined {
      const collection = <BattleWeatherTypes.Entry[]>this.collectionCache.getCollection(BattleWeatherTypes.KEY, BattleWeatherTypes.Entry);
      return collection.find(entry => entry.key === this._weatherType);
    }
  }
}

export default BattleClimateWeatherDescriptions;
