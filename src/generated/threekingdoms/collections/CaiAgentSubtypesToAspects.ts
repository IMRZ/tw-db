
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { CaiAspects } from "./CaiAspects";

export namespace CaiAgentSubtypesToAspects {
  export const KEY = new CollectionKey("cai_agent_subtypes_to_aspects");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentSubtype: string;
    readonly _aspect: string;
    readonly weight: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentSubtype = values["agent_subtype"];
      this._aspect = values["aspect"];
      this.weight = values["weight"];
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
    
    get aspect(): CaiAspects.Entry | undefined {
      const collection = <CaiAspects.Entry[]>this.collectionCache.getCollection(CaiAspects.KEY, CaiAspects.Entry);
      return collection.find(entry => entry.aspect === this._aspect);
    }
  }
}

export default CaiAgentSubtypesToAspects;
