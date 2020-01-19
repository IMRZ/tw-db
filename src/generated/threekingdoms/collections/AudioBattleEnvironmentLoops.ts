
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AudioBattleEnvironmentLoops {
  export const KEY = new CollectionKey("audio_battle_environment_loops");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly name: string;
    readonly eventStart: string;
    readonly eventStop: string;
    readonly intensityRtpc: string;
    readonly makeRtpcGlobal: boolean;
    readonly sampleDistance: number;
    readonly canWeatherDisable: boolean;
    readonly heightInfluence: boolean;
    readonly heightScale: number;
    readonly useBuildingHeight: boolean;
    readonly useTreeHeight: boolean;
    readonly alwaysPlay: boolean;
    readonly maxUnitsAffectedByWeather: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.name = values["name"];
      this.eventStart = values["event_start"];
      this.eventStop = values["event_stop"];
      this.intensityRtpc = values["intensity_rtpc"];
      this.makeRtpcGlobal = !!values["make_rtpc_global"];
      this.sampleDistance = values["sample_distance"];
      this.canWeatherDisable = !!values["can_weather_disable"];
      this.heightInfluence = !!values["height_influence"];
      this.heightScale = values["height_scale"];
      this.useBuildingHeight = !!values["use_building_height"];
      this.useTreeHeight = !!values["use_tree_height"];
      this.alwaysPlay = !!values["always_play"];
      this.maxUnitsAffectedByWeather = values["max_units_affected_by_weather"];
    }
    
  }
}

export default AudioBattleEnvironmentLoops;
