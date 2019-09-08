
import { CollectionCache, CollectionKey } from "../../../common";
import { AudioBattleEnvironmentWeathers } from "./AudioBattleEnvironmentWeathers";
import { AudioBattleEnvironmentTypes } from "./AudioBattleEnvironmentTypes";
import { AudioBattleEnvironmentLoops } from "./AudioBattleEnvironmentLoops";

export namespace AudioBattleEnvironmentWeatherLoopJunctions {
  export const KEY = new CollectionKey("audio_battle_environment_weather_loop_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _weather: string;
    readonly _type: string;
    readonly _loop: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._weather = values["weather"];
      this._type = values["type"];
      this._loop = values["loop"];
    }
    
    get weather(): AudioBattleEnvironmentWeathers.Entry | undefined {
      const collection = <AudioBattleEnvironmentWeathers.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentWeathers.KEY, AudioBattleEnvironmentWeathers.Entry);
      return collection.find(entry => entry.name === this._weather);
    }
    
    get type(): AudioBattleEnvironmentTypes.Entry | undefined {
      const collection = <AudioBattleEnvironmentTypes.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentTypes.KEY, AudioBattleEnvironmentTypes.Entry);
      return collection.find(entry => entry.name === this._type);
    }
    
    get loop(): AudioBattleEnvironmentLoops.Entry | undefined {
      const collection = <AudioBattleEnvironmentLoops.Entry[]>this.collectionCache.getCollection(AudioBattleEnvironmentLoops.KEY, AudioBattleEnvironmentLoops.Entry);
      return collection.find(entry => entry.name === this._loop);
    }
  }
}

export default AudioBattleEnvironmentWeatherLoopJunctions;
