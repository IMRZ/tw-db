
import { CollectionCache, CollectionKey } from "../../../common";
import { FactionFeatureTrees } from "./FactionFeatureTrees";
import { FeatureSetTransitions } from "./FeatureSetTransitions";

export namespace FactionFeatureTreeToTransitions {
  export const KEY = new CollectionKey("faction_feature_tree_to_transitions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _featureTree: string;
    readonly _transition: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._featureTree = values["feature_tree"];
      this._transition = values["transition"];
    }
    
    get featureTree(): FactionFeatureTrees.Entry | undefined {
      const collection = <FactionFeatureTrees.Entry[]>this.collectionCache.getCollection(FactionFeatureTrees.KEY, FactionFeatureTrees.Entry);
      return collection.find(entry => entry.key === this._featureTree);
    }
    
    get transition(): FeatureSetTransitions.Entry | undefined {
      const collection = <FeatureSetTransitions.Entry[]>this.collectionCache.getCollection(FeatureSetTransitions.KEY, FeatureSetTransitions.Entry);
      return collection.find(entry => entry.key === this._transition);
    }
  }
}

export default FactionFeatureTreeToTransitions;
