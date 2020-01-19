
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";

export namespace RitualPerformingCharacters {
  export const KEY = new CollectionKey("ritual_performing_characters");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _agentType: string;
    readonly _agentSubtype: string;
    readonly recoveryTime: number;
    readonly minimumLevel: number;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._agentType = values["agent_type"];
      this._agentSubtype = values["agent_subtype"];
      this.recoveryTime = values["recovery_time"];
      this.minimumLevel = values["minimum_level"];
    }
    
    get agentType(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agentType);
    }
    
    get agentSubtype(): AgentSubtypes.Entry | undefined {
      const collection = <AgentSubtypes.Entry[]>this.collectionCache.getCollection(AgentSubtypes.KEY, AgentSubtypes.Entry);
      return collection.find(entry => entry.key === this._agentSubtype);
    }
  }
}

export default RitualPerformingCharacters;
