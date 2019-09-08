
import { CollectionCache, CollectionKey } from "../../../common";
import { TechnologyNodeSets } from "./TechnologyNodeSets";
import { EffectBundles } from "./EffectBundles";

export namespace TechnologyCategoryModules {
  export const KEY = new CollectionKey("technology_category_modules");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _technologyNodeSet: string;
    readonly maxTier: number;
    readonly _effectBundle: string;
    readonly minTier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._technologyNodeSet = values["technology_node_set"];
      this.maxTier = values["max_tier"];
      this._effectBundle = values["effect_bundle"];
      this.minTier = values["min_tier"];
    }
    
    get technologyNodeSet(): TechnologyNodeSets.Entry | undefined {
      const collection = <TechnologyNodeSets.Entry[]>this.collectionCache.getCollection(TechnologyNodeSets.KEY, TechnologyNodeSets.Entry);
      return collection.find(entry => entry.key === this._technologyNodeSet);
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
  }
}

export default TechnologyCategoryModules;
