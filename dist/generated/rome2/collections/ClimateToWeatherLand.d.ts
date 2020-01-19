import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
import { Seasons } from "./Seasons";
export declare namespace ClimateToWeatherLand {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
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
        constructor(collectionCache: CollectionCache, values: any);
        get climateType(): Climates.Entry | undefined;
        get season(): Seasons.Entry | undefined;
    }
}
export default ClimateToWeatherLand;
