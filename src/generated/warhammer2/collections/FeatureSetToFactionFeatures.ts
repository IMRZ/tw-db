
import { CollectionCache, CollectionKey } from "../../../common";
import { FeatureSets } from "./FeatureSets";
import { FactionFeatures } from "./FactionFeatures";

export namespace FeatureSetToFactionFeatures {
  export const KEY = new CollectionKey("feature_set_to_faction_features");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _featureSet: string;
    readonly _feature: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._featureSet = values["feature_set"];
      this._feature = values["feature"];
    }
    
    get featureSet(): FeatureSets.Entry | undefined {
      const collection = <FeatureSets.Entry[]>this.collectionCache.getCollection(FeatureSets.KEY, FeatureSets.Entry);
      return collection.find(entry => entry.key === this._featureSet);
    }
    
    get feature(): FactionFeatures.Entry | undefined {
      const collection = <FactionFeatures.Entry[]>this.collectionCache.getCollection(FactionFeatures.KEY, FactionFeatures.Entry);
      return collection.find(entry => entry.key === this._feature);
    }
  }
}

export default FeatureSetToFactionFeatures;
