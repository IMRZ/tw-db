
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiAgentDistributionProfiles } from "./CaiAgentDistributionProfiles";
import { CaiAgentTypes } from "./CaiAgentTypes";
import { CaiAgentDistributionTypes } from "./CaiAgentDistributionTypes";

export namespace CaiAgentTypeDistributionProfileJunctions {
  export const KEY = new CollectionKey("cai_agent_type_distribution_profile_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _distributionProfileKey: string;
    readonly _agentTypeKey: string;
    readonly _distributionTypeKey: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._distributionProfileKey = values["distribution_profile_key"];
      this._agentTypeKey = values["agent_type_key"];
      this._distributionTypeKey = values["distribution_type_key"];
    }
    
    get distributionProfileKey(): CaiAgentDistributionProfiles.Entry | undefined {
      const collection = <CaiAgentDistributionProfiles.Entry[]>this.collectionCache.getCollection(CaiAgentDistributionProfiles.KEY, CaiAgentDistributionProfiles.Entry);
      return collection.find(entry => entry.key === this._distributionProfileKey);
    }
    
    get agentTypeKey(): CaiAgentTypes.Entry | undefined {
      const collection = <CaiAgentTypes.Entry[]>this.collectionCache.getCollection(CaiAgentTypes.KEY, CaiAgentTypes.Entry);
      return collection.find(entry => entry.key === this._agentTypeKey);
    }
    
    get distributionTypeKey(): CaiAgentDistributionTypes.Entry | undefined {
      const collection = <CaiAgentDistributionTypes.Entry[]>this.collectionCache.getCollection(CaiAgentDistributionTypes.KEY, CaiAgentDistributionTypes.Entry);
      return collection.find(entry => entry.key === this._distributionTypeKey);
    }
  }
}

export default CaiAgentTypeDistributionProfileJunctions;
