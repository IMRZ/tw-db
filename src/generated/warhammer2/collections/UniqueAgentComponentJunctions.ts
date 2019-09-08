
import { CollectionCache, CollectionKey } from "../../../common";
import { UniqueAgents } from "./UniqueAgents";
import { UniqueAgentComponents } from "./UniqueAgentComponents";

export namespace UniqueAgentComponentJunctions {
  export const KEY = new CollectionKey("unique_agent_component_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _uniqueAgent: string;
    readonly _component: string;
    readonly value: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._uniqueAgent = values["unique_agent"];
      this._component = values["component"];
      this.value = values["value"];
    }
    
    get uniqueAgent(): UniqueAgents.Entry | undefined {
      const collection = <UniqueAgents.Entry[]>this.collectionCache.getCollection(UniqueAgents.KEY, UniqueAgents.Entry);
      return collection.find(entry => entry._agentSubtype === this._uniqueAgent);
    }
    
    get component(): UniqueAgentComponents.Entry | undefined {
      const collection = <UniqueAgentComponents.Entry[]>this.collectionCache.getCollection(UniqueAgentComponents.KEY, UniqueAgentComponents.Entry);
      return collection.find(entry => entry.id === this._component);
    }
  }
}

export default UniqueAgentComponentJunctions;
