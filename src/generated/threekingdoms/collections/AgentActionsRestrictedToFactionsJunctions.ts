
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentActions } from "./AgentActions";
import { Factions } from "./Factions";

export namespace AgentActionsRestrictedToFactionsJunctions {
  export const KEY = new CollectionKey("agent_actions_restricted_to_factions_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly id: number;
    readonly _agentActionId: string;
    readonly _restrictedToFaction: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.id = values["id"];
      this._agentActionId = values["agent_action_id"];
      this._restrictedToFaction = values["restricted_to_faction"];
    }
    
    get agentActionId(): AgentActions.Entry | undefined {
      const collection = <AgentActions.Entry[]>this.collectionCache.getCollection(AgentActions.KEY, AgentActions.Entry);
      return collection.find(entry => entry.uniqueId === this._agentActionId);
    }
    
    get restrictedToFaction(): Factions.Entry | undefined {
      const collection = <Factions.Entry[]>this.collectionCache.getCollection(Factions.KEY, Factions.Entry);
      return collection.find(entry => entry.key === this._restrictedToFaction);
    }
  }
}

export default AgentActionsRestrictedToFactionsJunctions;
