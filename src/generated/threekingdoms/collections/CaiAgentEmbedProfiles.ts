
import { CollectionCache, CollectionKey } from "../../../common";


export namespace CaiAgentEmbedProfiles {
  export const KEY = new CollectionKey("cai_agent_embed_profiles");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly freeAgentExcessCap: number;
    readonly freeAgentExcessCapPerRegionMultiplier: number;
    readonly freeAgentExcessCapPerHordeMultiplier: number;
    readonly freeAgentDefaultTypeCap: number;
    readonly freeAgentDefaultTypeCapPerRegionMultiplier: number;
    readonly freeAgentDefaultTypeCapPerHordeMultiplier: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this.freeAgentExcessCap = values["free_agent_excess_cap"];
      this.freeAgentExcessCapPerRegionMultiplier = values["free_agent_excess_cap_per_region_multiplier"];
      this.freeAgentExcessCapPerHordeMultiplier = values["free_agent_excess_cap_per_horde_multiplier"];
      this.freeAgentDefaultTypeCap = values["free_agent_default_type_cap"];
      this.freeAgentDefaultTypeCapPerRegionMultiplier = values["free_agent_default_type_cap_per_region_multiplier"];
      this.freeAgentDefaultTypeCapPerHordeMultiplier = values["free_agent_default_type_cap_per_horde_multiplier"];
    }
    
  }
}

export default CaiAgentEmbedProfiles;
