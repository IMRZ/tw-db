import { CollectionCache, CollectionKey } from "../../../common";
import { Climates } from "./Climates";
import { Seasons } from "./Seasons";
import { BattleWeatherTypes } from "./BattleWeatherTypes";
export declare namespace BattleClimateWeatherDescriptions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _climateType: string;
        readonly _season: string;
        readonly _weatherType: string;
        readonly probability: number;
        readonly heatFatigue: number;
        readonly coldFatigue: number;
        readonly spottingScalar: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly climateType: Climates.Entry | undefined;
        readonly season: Seasons.Entry | undefined;
        readonly weatherType: BattleWeatherTypes.Entry | undefined;
    }
}
export default BattleClimateWeatherDescriptions;
