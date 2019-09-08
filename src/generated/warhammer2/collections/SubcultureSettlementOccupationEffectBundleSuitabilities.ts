
import { CollectionCache, CollectionKey } from "../../../common";
import { EffectBundles } from "./EffectBundles";
import { SubcultureSettlementOccupationSuitabilityTypes } from "./SubcultureSettlementOccupationSuitabilityTypes";

export namespace SubcultureSettlementOccupationEffectBundleSuitabilities {
  export const KEY = new CollectionKey("subculture_settlement_occupation_effect_bundle_suitabilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _effectBundle: string;
    readonly _suitability: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._effectBundle = values["effect_bundle"];
      this._suitability = values["suitability"];
    }
    
    get effectBundle(): EffectBundles.Entry | undefined {
      const collection = <EffectBundles.Entry[]>this.collectionCache.getCollection(EffectBundles.KEY, EffectBundles.Entry);
      return collection.find(entry => entry.key === this._effectBundle);
    }
    
    get suitability(): SubcultureSettlementOccupationSuitabilityTypes.Entry | undefined {
      const collection = <SubcultureSettlementOccupationSuitabilityTypes.Entry[]>this.collectionCache.getCollection(SubcultureSettlementOccupationSuitabilityTypes.KEY, SubcultureSettlementOccupationSuitabilityTypes.Entry);
      return collection.find(entry => entry.suitability === this._suitability);
    }
  }
}

export default SubcultureSettlementOccupationEffectBundleSuitabilities;
