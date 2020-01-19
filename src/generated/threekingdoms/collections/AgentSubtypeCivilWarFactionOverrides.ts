
import { CollectionCache, CollectionKey } from "../../../common";
import { FactionCivilWarSetups } from "./FactionCivilWarSetups";
import { AgentSubtypes } from "./AgentSubtypes";
import { Factions } from "./Factions";

export namespace AgentSubtypeCivilWarFactionOverrides {
  export const KEY = new CollectionKey("agent_subtype_civil_war_faction_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _secondaryFaction: string;
    readonly _agentSubtype: string;
    readonly _overrideFaction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._secondaryFaction = values["secondary_faction"];
      this._agentSubtype = values["agent_subtype"];
      this._overrideFaction = values["override_faction"];
    }
    
    get secondaryFaction(): FactionCivilWarSetups.Entry | undefined {
      const collection = <FactionCivilWarSetups.Entry[]>this.collectionCache.getCollection(FactionCivilWarSetups.KEY, FactionCivilWarSetups.Entry);
      return collection.find(entry => entry._secondaryFaction === this._secondaryFaction);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
    
    get overrideFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._overrideFaction);
    }
  }
}

export default AgentSubtypeCivilWarFactionOverrides;
