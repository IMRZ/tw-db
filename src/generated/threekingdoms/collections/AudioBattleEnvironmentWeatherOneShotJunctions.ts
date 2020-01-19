
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioBattleEnvironmentWeathers } from "./AudioBattleEnvironmentWeathers";
import { AudioBattleEnvironmentTypes } from "./AudioBattleEnvironmentTypes";
import { AudioBattleEnvironmentOneShots } from "./AudioBattleEnvironmentOneShots";

export namespace AudioBattleEnvironmentWeatherOneShotJunctions {
  export const KEY = new CollectionKey("audio_battle_environment_weather_one_shot_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _weather: string;
    readonly _type: string;
    readonly _oneShot: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._weather = values["weather"];
      this._type = values["type"];
      this._oneShot = values["one_shot"];
    }
    
    get weather(): AudioBattleEnvironmentWeathers.Entry | undefined {
      const collection = <AudioBattleEnvironmentWeathers.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentWeathers.KEY, AudioBattleEnvironmentWeathers.Entry);
      return collection.find(entry => entry.name === this._weather);
    }
    
    get type(): AudioBattleEnvironmentTypes.Entry | undefined {
      const collection = <AudioBattleEnvironmentTypes.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentTypes.KEY, AudioBattleEnvironmentTypes.Entry);
      return collection.find(entry => entry.name === this._type);
    }
    
    get oneShot(): AudioBattleEnvironmentOneShots.Entry | undefined {
      const collection = <AudioBattleEnvironmentOneShots.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentOneShots.KEY, AudioBattleEnvironmentOneShots.Entry);
      return collection.find(entry => entry.name === this._oneShot);
    }
  }
}

export default AudioBattleEnvironmentWeatherOneShotJunctions;
