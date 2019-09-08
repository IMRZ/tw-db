
import { CollectionCache, CollectionKey } from "../../../common";
import { Ancillaries } from "./Ancillaries";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace AncillariesIncludedAgentSubtypes {
  export const KEY = new CollectionKey("ancillaries_included_agent_subtypes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _ancillary: string;
    readonly _agentSubtype: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._ancillary = values["ancillary"];
      this._agentSubtype = values["agent_subtype"];
    }
    
    get ancillary(): Ancillaries.Entry | undefined {
      const collection = <Ancillaries.Entry[]>this.collectionCache.getCollection(Ancillaries.KEY, Ancillaries.Entry);
      return collection.find(entry => entry._key === this._ancillary);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
  }
}

export default AncillariesIncludedAgentSubtypes;
