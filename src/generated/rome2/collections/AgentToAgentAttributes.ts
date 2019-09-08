
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentAttributes } from "./AgentAttributes";
import { Agents } from "./Agents";

export namespace AgentToAgentAttributes {
  export const KEY = new CollectionKey("agent_to_agent_attributes");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _attribute: string;
    readonly _agent: string;
    readonly defaultValue: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._attribute = values["attribute"];
      this._agent = values["agent"];
      this.defaultValue = values["default_value"];
    }
    
    get attribute(): AgentAttributes.Entry | undefined {
      const collection = <AgentAttributes.Entry[]>this.collectionCache.getCollection(AgentAttributes.KEY, AgentAttributes.Entry);
      return collection.find(entry => entry.key === this._attribute);
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
  }
}

export default AgentToAgentAttributes;
