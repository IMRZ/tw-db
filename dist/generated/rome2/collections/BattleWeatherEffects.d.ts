import { CollectionCache, CollectionKey } from "../../../common";
import { BattleWeatherTypes } from "./BattleWeatherTypes";
import { UiUnitStats } from "./UiUnitStats";
export declare namespace BattleWeatherEffects {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _weatherType: string;
        readonly _stat: string;
        readonly value: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly weatherType: BattleWeatherTypes.Entry | undefined;
        readonly stat: UiUnitStats.Entry | undefined;
    }
}
export default BattleWeatherEffects;
