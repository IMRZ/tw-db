
import { CollectionCache, CollectionKey } from "../../../common";
import { PooledResourceFactors } from "./PooledResourceFactors";

export namespace PooledResources {
  export const KEY = new CollectionKey("pooled_resources");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly displayName: string;
    readonly minimum: number;
    readonly maximum: number;
    readonly persistentFactors: boolean;
    readonly positiveFactorsDisplayName: string;
    readonly negativeFactorsDisplayName: string;
    readonly description: string;
    readonly aiIgnored: boolean;
    readonly _defaultFactor: string;
    readonly optionalIconPath: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.displayName = values["display_name"];
      this.minimum = values["minimum"];
      this.maximum = values["maximum"];
      this.persistentFactors = !!values["persistent_factors"];
      this.positiveFactorsDisplayName = values["positive_factors_display_name"];
      this.negativeFactorsDisplayName = values["negative_factors_display_name"];
      this.description = values["description"];
      this.aiIgnored = !!values["ai_ignored"];
      this._defaultFactor = values["default_factor"];
      this.optionalIconPath = values["optional_icon_path"];
    }
    
    get defaultFactor(): PooledResourceFactors.Entry | undefined {
      const collection = <PooledResourceFactors.Entry[]>this.collectionCache.getCollection(PooledResourceFactors.KEY, PooledResourceFactors.Entry);
      return collection.find(entry => entry.key === this._defaultFactor);
    }
  }
}

export default PooledResources;
