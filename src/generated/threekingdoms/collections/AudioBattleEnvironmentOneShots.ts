
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioBattleEnvironmentOneShots {
  export const KEY = new CollectionKey("audio_battle_environment_one_shots");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly event: string;
    readonly minTime: number;
    readonly maxTime: number;
    readonly minDistance: number;
    readonly maxDistance: number;
    readonly minHeight: number;
    readonly maxHeight: number;
    readonly requiredIntensity: number;
    readonly canWeatherDisable: boolean;
    readonly probability: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.event = values["event"];
      this.minTime = values["min_time"];
      this.maxTime = values["max_time"];
      this.minDistance = values["min_distance"];
      this.maxDistance = values["max_distance"];
      this.minHeight = values["min_height"];
      this.maxHeight = values["max_height"];
      this.requiredIntensity = values["required_intensity"];
      this.canWeatherDisable = !!values["can_weather_disable"];
      this.probability = values["probability"];
    }
    
  }
}

export default AudioBattleEnvironmentOneShots;
