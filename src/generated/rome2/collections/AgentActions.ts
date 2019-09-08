
import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { Abilities } from "./Abilities";
import { AgentAttributes } from "./AgentAttributes";
import { ActionResults } from "./ActionResults";
import { AgentActionMessageEvents } from "./AgentActionMessageEvents";
import { Effects } from "./Effects";

export namespace AgentActions {
  export const KEY = new CollectionKey("agent_actions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agent: string;
    readonly _ability: string;
    readonly _attribute: string;
    readonly _criticalFailure: string;
    readonly _failure: string;
    readonly _opportuneFailure: string;
    readonly _success: string;
    readonly _criticalSuccess: string;
    readonly _cannotFail: string;
    readonly localisedActionName: string;
    readonly localisedActionDescription: string;
    readonly _yourMessageEventsMale: string;
    readonly _yourMessageEventsFemale: string;
    readonly _theirMessageEventsMale: string;
    readonly _theirMessageEventsFemale: string;
    readonly _enabledByEffect: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agent = values["agent"];
      this._ability = values["ability"];
      this._attribute = values["attribute"];
      this._criticalFailure = values["critical_failure"];
      this._failure = values["failure"];
      this._opportuneFailure = values["opportune_failure"];
      this._success = values["success"];
      this._criticalSuccess = values["critical_success"];
      this._cannotFail = values["cannot_fail"];
      this.localisedActionName = values["localised_action_name"];
      this.localisedActionDescription = values["localised_action_description"];
      this._yourMessageEventsMale = values["your_message_events_male"];
      this._yourMessageEventsFemale = values["your_message_events_female"];
      this._theirMessageEventsMale = values["their_message_events_male"];
      this._theirMessageEventsFemale = values["their_message_events_female"];
      this._enabledByEffect = values["enabled_by_effect"];
    }
    
    get agent(): Agents.Entry | undefined {
      const collection = <Agents.Entry[]>this.collectionCache.getCollection(Agents.KEY, Agents.Entry);
      return collection.find(entry => entry.key === this._agent);
    }
    
    get ability(): Abilities.Entry | undefined {
      const collection = <Abilities.Entry[]>this.collectionCache.getCollection(Abilities.KEY, Abilities.Entry);
      return collection.find(entry => entry.ability === this._ability);
    }
    
    get attribute(): AgentAttributes.Entry | undefined {
      const collection = <AgentAttributes.Entry[]>this.collectionCache.getCollection(AgentAttributes.KEY, AgentAttributes.Entry);
      return collection.find(entry => entry.key === this._attribute);
    }
    
    get criticalFailure(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._criticalFailure);
    }
    
    get failure(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._failure);
    }
    
    get opportuneFailure(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._opportuneFailure);
    }
    
    get success(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._success);
    }
    
    get criticalSuccess(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._criticalSuccess);
    }
    
    get cannotFail(): ActionResults.Entry | undefined {
      const collection = <ActionResults.Entry[]>this.collectionCache.getCollection(ActionResults.KEY, ActionResults.Entry);
      return collection.find(entry => entry.key === this._cannotFail);
    }
    
    get yourMessageEventsMale(): AgentActionMessageEvents.Entry | undefined {
      const collection = <AgentActionMessageEvents.Entry[]>this.collectionCache.getCollection(AgentActionMessageEvents.KEY, AgentActionMessageEvents.Entry);
      return collection.find(entry => entry.key === this._yourMessageEventsMale);
    }
    
    get yourMessageEventsFemale(): AgentActionMessageEvents.Entry | undefined {
      const collection = <AgentActionMessageEvents.Entry[]>this.collectionCache.getCollection(AgentActionMessageEvents.KEY, AgentActionMessageEvents.Entry);
      return collection.find(entry => entry.key === this._yourMessageEventsFemale);
    }
    
    get theirMessageEventsMale(): AgentActionMessageEvents.Entry | undefined {
      const collection = <AgentActionMessageEvents.Entry[]>this.collectionCache.getCollection(AgentActionMessageEvents.KEY, AgentActionMessageEvents.Entry);
      return collection.find(entry => entry.key === this._theirMessageEventsMale);
    }
    
    get theirMessageEventsFemale(): AgentActionMessageEvents.Entry | undefined {
      const collection = <AgentActionMessageEvents.Entry[]>this.collectionCache.getCollection(AgentActionMessageEvents.KEY, AgentActionMessageEvents.Entry);
      return collection.find(entry => entry.key === this._theirMessageEventsFemale);
    }
    
    get enabledByEffect(): Effects.Entry | undefined {
      const collection = <Effects.Entry[]>this.collectionCache.getCollection(Effects.KEY, Effects.Entry);
      return collection.find(entry => entry.effect === this._enabledByEffect);
    }
  }
}

export default AgentActions;
