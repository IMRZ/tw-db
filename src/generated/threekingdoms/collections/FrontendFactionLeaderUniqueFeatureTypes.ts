
import { CollectionCache, CollectionKey } from "../../../common";


export namespace FrontendFactionLeaderUniqueFeatureTypes {
  export const KEY = new CollectionKey("frontend_faction_leader_unique_feature_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
    }
    
  }
}

export default FrontendFactionLeaderUniqueFeatureTypes;
