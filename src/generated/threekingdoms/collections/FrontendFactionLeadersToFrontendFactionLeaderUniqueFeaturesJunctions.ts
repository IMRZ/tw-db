
import { CollectionCache, CollectionKey } from "../../../common";
import { FrontendFactionLeaders } from "./FrontendFactionLeaders";
import { FrontendFactionLeaderUniqueFeatures } from "./FrontendFactionLeaderUniqueFeatures";

export namespace FrontendFactionLeadersToFrontendFactionLeaderUniqueFeaturesJunctions {
  export const KEY = new CollectionKey("frontend_faction_leaders_to_frontend_faction_leader_unique_features_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _frontendFactionLeader: string;
    readonly _frontendFactionLeaderUniqueFeature: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._frontendFactionLeader = values["frontend_faction_leader"];
      this._frontendFactionLeaderUniqueFeature = values["frontend_faction_leader_unique_feature"];
    }
    
    get frontendFactionLeader(): FrontendFactionLeaders.Entry | undefined {
      const collection = <FrontendFactionLeaders.Entry[]>this.collectionCache.getCollection(FrontendFactionLeaders.KEY, FrontendFactionLeaders.Entry);
      return collection.find(entry => entry.key === this._frontendFactionLeader);
    }
    
    get frontendFactionLeaderUniqueFeature(): FrontendFactionLeaderUniqueFeatures.Entry | undefined {
      const collection = <FrontendFactionLeaderUniqueFeatures.Entry[]>this.collectionCache.getCollection(FrontendFactionLeaderUniqueFeatures.KEY, FrontendFactionLeaderUniqueFeatures.Entry);
      return collection.find(entry => entry.key === this._frontendFactionLeaderUniqueFeature);
    }
  }
}

export default FrontendFactionLeadersToFrontendFactionLeaderUniqueFeaturesJunctions;
