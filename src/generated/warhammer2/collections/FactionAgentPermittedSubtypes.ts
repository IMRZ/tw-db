
import { CollectionCache, CollectionKey } from "../../../common";
import { Factions } from "./Factions";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace FactionAgentPermittedSubtypes {
  export const KEY = new CollectionKey("faction_agent_permitted_subtypes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _faction: string;
    readonly _agent: string;
    readonly _subtype: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._faction = values["faction"];
      this._agent = values["agent"];
      this._subtype = values["subtype"];
    }
    
    get faction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._faction);
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
    
    get subtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._subtype);
    }
  }
}

export default FactionAgentPermittedSubtypes;
