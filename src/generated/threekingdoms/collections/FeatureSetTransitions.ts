
import { CollectionCache, CollectionKey } from "../../../common";
import { FeatureSets } from "./FeatureSets";
import { FeatureSetTransitionHandlers } from "./FeatureSetTransitionHandlers";

export namespace FeatureSetTransitions {
  export const KEY = new CollectionKey("feature_set_transitions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _from: string;
    readonly _to: string;
    readonly _handler: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._from = values["from"];
      this._to = values["to"];
      this._handler = values["handler"];
    }
    
    get from(): FeatureSets.Entry | undefined {
      const collection = <FeatureSets.Entry[]>this.collectionCache.getCollection(FeatureSets.KEY, FeatureSets.Entry);
      return collection.find(entry => entry.key === this._from);
    }
    
    get to(): FeatureSets.Entry | undefined {
      const collection = <FeatureSets.Entry[]>this.collectionCache.getCollection(FeatureSets.KEY, FeatureSets.Entry);
      return collection.find(entry => entry.key === this._to);
    }
    
    get handler(): FeatureSetTransitionHandlers.Entry | undefined {
      const collection = <FeatureSetTransitionHandlers.Entry[]>this.collectionCache.getCollection(FeatureSetTransitionHandlers.KEY, FeatureSetTransitionHandlers.Entry);
      return collection.find(entry => entry.key === this._handler);
    }
  }
}

export default FeatureSetTransitions;
