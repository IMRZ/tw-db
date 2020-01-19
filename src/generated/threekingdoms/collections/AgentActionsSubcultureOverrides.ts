
import { CollectionCache, CollectionKey } from "../../../common";
import { AgentActions } from "./AgentActions";
import { CulturesSubcultures } from "./CulturesSubcultures";

export namespace AgentActionsSubcultureOverrides {
  export const KEY = new CollectionKey("agent_actions_subculture_overrides");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentAction: string;
    readonly _subculture: string;
    readonly title: string;
    readonly description: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentAction = values["agent_action"];
      this._subculture = values["subculture"];
      this.title = values["title"];
      this.description = values["description"];
    }
    
    get agentAction(): AgentActions.Entry | undefined {
      const collection = <AgentActions.Entry[]>this.collectionCache.getCollection(AgentActions.KEY, AgentActions.Entry);
      return collection.find(entry => entry.uniqueId === this._agentAction);
    }
    
    get subculture(): CulturesSubcultures.Entry | undefined {
      const collection = <CulturesSubcultures.Entry[]>this.collectionCache.getCollection(CulturesSubcultures.KEY, CulturesSubcultures.Entry);
      return collection.find(entry => entry.subculture === this._subculture);
    }
  }
}

export default AgentActionsSubcultureOverrides;
