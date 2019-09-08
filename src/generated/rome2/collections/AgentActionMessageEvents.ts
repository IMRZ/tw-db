
import { CollectionCache, CollectionKey } from "../../../common";
import { MessageEvents } from "./MessageEvents";

export namespace AgentActionMessageEvents {
  export const KEY = new CollectionKey("agent_action_message_events");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly key: string;
    readonly _criticalFailure: string;
    readonly _failure: string;
    readonly _opportuneFailure: string;
    readonly _success: string;
    readonly _criticalSuccess: string;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this.key = values["key"];
      this._criticalFailure = values["critical_failure"];
      this._failure = values["failure"];
      this._opportuneFailure = values["opportune_failure"];
      this._success = values["success"];
      this._criticalSuccess = values["critical_success"];
    }
    
    get criticalFailure(): MessageEvents.Entry | undefined {
      const collection = <MessageEvents.Entry[]>this.collectionCache.getCollection(MessageEvents.KEY, MessageEvents.Entry);
      return collection.find(entry => entry.event === this._criticalFailure);
    }
    
    get failure(): MessageEvents.Entry | undefined {
      const collection = <MessageEvents.Entry[]>this.collectionCache.getCollection(MessageEvents.KEY, MessageEvents.Entry);
      return collection.find(entry => entry.event === this._failure);
    }
    
    get opportuneFailure(): MessageEvents.Entry | undefined {
      const collection = <MessageEvents.Entry[]>this.collectionCache.getCollection(MessageEvents.KEY, MessageEvents.Entry);
      return collection.find(entry => entry.event === this._opportuneFailure);
    }
    
    get success(): MessageEvents.Entry | undefined {
      const collection = <MessageEvents.Entry[]>this.collectionCache.getCollection(MessageEvents.KEY, MessageEvents.Entry);
      return collection.find(entry => entry.event === this._success);
    }
    
    get criticalSuccess(): MessageEvents.Entry | undefined {
      const collection = <MessageEvents.Entry[]>this.collectionCache.getCollection(MessageEvents.KEY, MessageEvents.Entry);
      return collection.find(entry => entry.event === this._criticalSuccess);
    }
  }
}

export default AgentActionMessageEvents;
