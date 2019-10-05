
import { CollectionCache, CollectionKey } from "../../../common";
import { MilitaryForceTypes } from "./MilitaryForceTypes";
import { MilitaryForceTypeFeatures } from "./MilitaryForceTypeFeatures";

export namespace MilitaryForceTypeFeatureJunctions {
  export const KEY = new CollectionKey("military_force_type_feature_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _forceType: string;
    readonly _feature: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._forceType = values["force_type"];
      this._feature = values["feature"];
    }
    
    get forceType(): MilitaryForceTypes.Entry | undefined {
      const collection = <MilitaryForceTypes.Entry[]>this.collectionCache.getCollection(MilitaryForceTypes.KEY, MilitaryForceTypes.Entry);
      return collection.find(entry => entry.key === this._forceType);
    }
    
    get feature(): MilitaryForceTypeFeatures.Entry | undefined {
      const collection = <MilitaryForceTypeFeatures.Entry[]>this.collectionCache.getCollection(MilitaryForceTypeFeatures.KEY, MilitaryForceTypeFeatures.Entry);
      return collection.find(entry => entry.key === this._feature);
    }
  }
}

export default MilitaryForceTypeFeatureJunctions;
