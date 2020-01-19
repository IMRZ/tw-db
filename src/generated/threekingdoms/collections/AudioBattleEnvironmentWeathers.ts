
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioBattleEnvironmentWeathers {
  export const KEY = new CollectionKey("audio_battle_environment_weathers");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly windIntensityModifier: number;
    readonly disablesEnvironment: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.windIntensityModifier = values["wind_intensity_modifier"];
      this.disablesEnvironment = !!values["disables_environment"];
    }
    
  }
}

export default AudioBattleEnvironmentWeathers;
