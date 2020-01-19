
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentWeightedSelectionSets } from "./AgentWeightedSelectionSets";
import { Agents } from "./Agents";
import { AgentSpawnReasonEnums } from "./AgentSpawnReasonEnums";
import { AgentSubtypeWeightedSelectionSets } from "./AgentSubtypeWeightedSelectionSets";

export namespace AgentWeightedSelectionToSubtypeSets {
  export const KEY = new CollectionKey("agent_weighted_selection_to_subtype_sets");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentSet: string;
    readonly _agent: string;
    readonly _spawnReason: string;
    readonly _subtypeSet: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentSet = values["agent_set"];
      this._agent = values["agent"];
      this._spawnReason = values["spawn_reason"];
      this._subtypeSet = values["subtype_set"];
    }
    
    get agentSet(): AgentWeightedSelectionSets.Entry | undefined {
      const collection = <AgentWeightedSelectionSets.Entry[]>this.collectionCache.getCollection(AgentWeightedSelectionSets.KEY, AgentWeightedSelectionSets.Entry);
      return collection.find(entry => entry.key === this._agentSet);
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
    
    get spawnReason(): AgentSpawnReasonEnums.Entry | undefined {
      const collection = <AgentSpawnReasonEnums.Entry[]>this.collectionCache.getCollection(AgentSpawnReasonEnums.KEY, AgentSpawnReasonEnums.Entry);
      return collection.find(entry => entry.key === this._spawnReason);
    }
    
    get subtypeSet(): AgentSubtypeWeightedSelectionSets.Entry | undefined {
      const collection = <AgentSubtypeWeightedSelectionSets.Entry[]>this.collectionCache.getCollection(AgentSubtypeWeightedSelectionSets.KEY, AgentSubtypeWeightedSelectionSets.Entry);
      return collection.find(entry => entry.key === this._subtypeSet);
    }
  }
}

export default AgentWeightedSelectionToSubtypeSets;
