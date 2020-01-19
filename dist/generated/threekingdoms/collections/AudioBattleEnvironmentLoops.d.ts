import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AudioBattleEnvironmentLoops {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AudioBattleEnvironmentLoops;
