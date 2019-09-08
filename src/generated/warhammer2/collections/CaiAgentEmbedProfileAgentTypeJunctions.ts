
import { CollectionCache, CollectionKey } from "../../../common";
import { CaiAgentEmbedProfiles } from "./CaiAgentEmbedProfiles";
import { CaiAgentTypes } from "./CaiAgentTypes";

export namespace CaiAgentEmbedProfileAgentTypeJunctions {
  export const KEY = new CollectionKey("cai_agent_embed_profile_agent_type_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentEmbedProfileKey: string;
    readonly _agentTypeKey: string;
    readonly freeAgentTypeCap: number;
    readonly freeAgentTypeCapPerRegionMultiplier: number;
    readonly freeAgentTypeCapPerHordeMultiplier: number;
    readonly exemptFromFreeAgentCaps: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentEmbedProfileKey = values["agent_embed_profile_key"];
      this._agentTypeKey = values["agent_type_key"];
      this.freeAgentTypeCap = values["free_agent_type_cap"];
      this.freeAgentTypeCapPerRegionMultiplier = values["free_agent_type_cap_per_region_multiplier"];
      this.freeAgentTypeCapPerHordeMultiplier = values["free_agent_type_cap_per_horde_multiplier"];
      this.exemptFromFreeAgentCaps = !!values["exempt_from_free_agent_caps"];
    }
    
    get agentEmbedProfileKey(): CaiAgentEmbedProfiles.Entry | undefined {
      const collection = <CaiAgentEmbedProfiles.Entry[]>this.collectionCache.getCollection(CaiAgentEmbedProfiles.KEY, CaiAgentEmbedProfiles.Entry);
      return collection.find(entry => entry.key === this._agentEmbedProfileKey);
    }
    
    get agentTypeKey(): CaiAgentTypes.Entry | undefined {
      const collection = <CaiAgentTypes.Entry[]>this.collectionCache.getCollection(CaiAgentTypes.KEY, CaiAgentTypes.Entry);
      return collection.find(entry => entry.key === this._agentTypeKey);
    }
  }
}

export default CaiAgentEmbedProfileAgentTypeJunctions;
