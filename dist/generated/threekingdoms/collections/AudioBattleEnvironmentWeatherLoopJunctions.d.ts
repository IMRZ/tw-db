import { CollectionCache, CollectionKey } from "../../../common";
import { AudioBattleEnvironmentWeathers } from "./AudioBattleEnvironmentWeathers";
import { AudioBattleEnvironmentTypes } from "./AudioBattleEnvironmentTypes";
import { AudioBattleEnvironmentLoops } from "./AudioBattleEnvironmentLoops";
export declare namespace AudioBattleEnvironmentWeatherLoopJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _weather: string;
        readonly _type: string;
        readonly _loop: string;
        constructor(collectionCache: CollectionCache, values: any);
        get weather(): AudioBattleEnvironmentWeathers.Entry | undefined;
        get type(): AudioBattleEnvironmentTypes.Entry | undefined;
        get loop(): AudioBattleEnvironmentLoops.Entry | undefined;
    }
}
export default AudioBattleEnvironmentWeatherLoopJunctions;
