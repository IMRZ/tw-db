import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace BattleWeatherTypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly level: number;
        readonly precipitationType: string;
        readonly numParticles: number;
        readonly particleSize: number;
        readonly particleSpeed: number;
        readonly onscreen: string;
        readonly listOrder: number;
        readonly navalAppropriate: boolean;
        readonly accuracyMultiplier: number;
        readonly bowReloadBonus: number;
        readonly gunReloadBonus: number;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default BattleWeatherTypes;
