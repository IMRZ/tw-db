import { CollectionCache, CollectionKey } from "../../../common";
import { AudioBattleEnvironmentWeathers } from "./AudioBattleEnvironmentWeathers";
import { AudioBattleEnvironmentTypes } from "./AudioBattleEnvironmentTypes";
import { AudioBattleEnvironmentOneShots } from "./AudioBattleEnvironmentOneShots";
export declare namespace AudioBattleEnvironmentWeatherOneShotJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _weather: string;
        readonly _type: string;
        readonly _oneShot: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly weather: AudioBattleEnvironmentWeathers.Entry | undefined;
        readonly type: AudioBattleEnvironmentTypes.Entry | undefined;
        readonly oneShot: AudioBattleEnvironmentOneShots.Entry | undefined;
    }
}
export default AudioBattleEnvironmentWeatherOneShotJunctions;
