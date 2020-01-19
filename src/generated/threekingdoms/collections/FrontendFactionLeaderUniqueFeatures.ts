
import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionLeaderUniqueFeatureTypes } from "./FrontendFactionLeaderUniqueFeatureTypes";

export namespace FrontendFactionLeaderUniqueFeatures {
  export const KEY = new CollectionKey("frontend_faction_leader_unique_features");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly iconPath: string;
    readonly localisedDescription: string;
    readonly _featureType: string;
    readonly sortOrder: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.iconPath = values["icon_path"];
      this.localisedDescription = values["localised_description"];
      this._featureType = values["feature_type"];
      this.sortOrder = values["sort_order"];
    }
    
    get featureType(): FrontendFactionLeaderUniqueFeatureTypes.Entry | undefined {
      const collection = <FrontendFactionLeaderUniqueFeatureTypes.Entry[]>this.collectionCache.getCollection(FrontendFactionLeaderUniqueFeatureTypes.KEY, FrontendFactionLeaderUniqueFeatureTypes.Entry);
      return collection.find(entry => entry.key === this._featureType);
    }
  }
}

export default FrontendFactionLeaderUniqueFeatures;
