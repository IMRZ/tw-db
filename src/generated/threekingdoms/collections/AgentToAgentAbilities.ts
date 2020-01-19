
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Abilities } from "./Abilities";

export namespace AgentToAgentAbilities {
  export const KEY = new CollectionKey("agent_to_agent_abilities");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agent: string;
    readonly _ability: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agent = values["agent"];
      this._ability = values["ability"];
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
    
    get ability(): Abilities.Entry | undefined {
      const collection = <Abilities.Entry[]>this.collectionCache.getCollection(Abilities.KEY, Abilities.Entry);
      return collection.find(entry => entry.ability === this._ability);
    }
  }
}

export default AgentToAgentAbilities;
