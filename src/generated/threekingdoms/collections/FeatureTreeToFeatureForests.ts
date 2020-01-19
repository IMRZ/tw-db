
import { CollectionCache, CollectionKey } from "../../../common";
import { FactionFeatureForests } from "./FactionFeatureForests";
import { FactionFeatureTrees } from "./FactionFeatureTrees";
import { FeatureSets } from "./FeatureSets";

export namespace FeatureTreeToFeatureForests {
  export const KEY = new CollectionKey("feature_tree_to_feature_forests");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _forest: string;
    readonly _tree: string;
    readonly _startingFeatureSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._forest = values["forest"];
      this._tree = values["tree"];
      this._startingFeatureSet = values["starting_feature_set"];
    }
    
    get forest(): FactionFeatureForests.Entry | undefined {
      const collection = <FactionFeatureForests.Entry[]>this.collectionCache.getCollection(FactionFeatureForests.KEY, FactionFeatureForests.Entry);
      return collection.find(entry => entry.key === this._forest);
    }
    
    get tree(): FactionFeatureTrees.Entry | undefined {
      const collection = <FactionFeatureTrees.Entry[]>this.collectionCache.getCollection(FactionFeatureTrees.KEY, FactionFeatureTrees.Entry);
      return collection.find(entry => entry.key === this._tree);
    }
    
    get startingFeatureSet(): FeatureSets.Entry | undefined {
      const collection = <FeatureSets.Entry[]>this.collectionCache.getCollection(FeatureSets.KEY, FeatureSets.Entry);
      return collection.find(entry => entry.key === this._startingFeatureSet);
    }
  }
}

export default FeatureTreeToFeatureForests;
