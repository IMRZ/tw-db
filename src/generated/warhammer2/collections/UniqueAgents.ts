
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypes } from "./AgentSubtypes";
import { Names } from "./Names";
import { Agents } from "./Agents";
import { UniqueAgentSpawnBehaviours } from "./UniqueAgentSpawnBehaviours";

export namespace UniqueAgents {
  export const KEY = new CollectionKey("unique_agents");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentSubtype: string;
    readonly _forename: number;
    readonly _surname: number;
    readonly _otherName: number;
    readonly _clanName: number;
    readonly _agentType: string;
    readonly _spawnBehaviour: string;
    readonly spawnViaUi: boolean;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentSubtype = values["agent_subtype"];
      this._forename = values["forename"];
      this._surname = values["surname"];
      this._otherName = values["other_name"];
      this._clanName = values["clan_name"];
      this._agentType = values["agent_type"];
      this._spawnBehaviour = values["spawn_behaviour"];
      this.spawnViaUi = !!values["spawn_via_ui"];
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
    
    get forename(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._forename);
    }
    
    get surname(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._surname);
    }
    
    get otherName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._otherName);
    }
    
    get clanName(): Names.Entry | undefined {
      const collection = <Names.Entry[]>this.collectionCache.getCollection(Names.KEY, Names.Entry);
      return collection.find(entry => entry.id === this._clanName);
    }
    
    get agentType(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentType);
    }
    
    get spawnBehaviour(): UniqueAgentSpawnBehaviours.Entry | undefined {
      const collection = <UniqueAgentSpawnBehaviours.Entry[]>this.collectionCache.getCollection(UniqueAgentSpawnBehaviours.KEY, UniqueAgentSpawnBehaviours.Entry);
      return collection.find(entry => entry.id === this._spawnBehaviour);
    }
  }
}

export default UniqueAgents;
