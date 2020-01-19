import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace Seasons {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly season: string;
        readonly onscreen: string;
        readonly longname: string;
        readonly shortname: string;
        readonly index: number;
        readonly default: boolean;
        readonly battleDefault: boolean;
        readonly convertRainToSnow: boolean;
        readonly convertSnowToRain: boolean;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default Seasons;
