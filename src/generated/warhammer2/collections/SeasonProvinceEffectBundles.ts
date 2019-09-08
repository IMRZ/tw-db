
import { CollectionCache, CollectionKey } from "../../../common";
import { Seasons } from "./Seasons";
import { Provinces } from "./Provinces";
import { EffectBundles } from "./EffectBundles";

export namespace SeasonProvinceEffectBundles {
  export const KEY = new CollectionKey("season_province_effect_bundles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _season: string;
    readonly _province: string;
    readonly _effectBundle: string;
    readonly weighting: number;
    readonly default: boolean;
    readonly climatePhaseLowerThreshold: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._season = values["season"];
      this._province = values["province"];
      this._effectBundle = values["effect_bundle"];
      this.weighting = values["weighting"];
      this.default = !!values["default"];
      this.climatePhaseLowerThreshold = values["climate_phase_lower_threshold"];
    }
    
    get season(): Seasons.Entry | undefined {
      const collection = <Seasons.Entry[]>this.collectionCache.getCollection(Seasons.KEY, Seasons.Entry);
      return collection.find(entry => entry.season === this._season);
    }
    
    get province(): Provinces.Entry | undefined {
      const collection = <Provinces.Entry[]>this.collectionCache.getCollection(Provinces.KEY, Provinces.Entry);
      return collection.find(entry => entry.key === this._province);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default SeasonProvinceEffectBundles;
