import { CollectionCache, CollectionKey } from "../../../common";
import { Seasons } from "./Seasons";
import { Provinces } from "./Provinces";
import { EffectBundles } from "./EffectBundles";
export declare namespace SeasonProvinceEffectBundles {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _season: string;
        readonly _province: string;
        readonly _effectBundle: string;
        readonly weighting: number;
        readonly default: boolean;
        readonly climatePhaseLowerThreshold: number;
        constructor(collectionCache: CollectionCache, values: any);
        get season(): Seasons.Entry | undefined;
        get province(): Provinces.Entry | undefined;
        get effectBundle(): EffectBundles.Entry | undefined;
    }
}
export default SeasonProvinceEffectBundles;
