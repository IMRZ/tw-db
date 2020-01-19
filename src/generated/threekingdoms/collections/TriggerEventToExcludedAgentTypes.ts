
import { CollectionCache, CollectionKey } from "../../../common";


export namespace TriggerEventToExcludedAgentTypes {
  export const KEY = new CollectionKey("trigger_event_to_excluded_agent_types");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _event: any;
    readonly _agent: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._event = values["event"];
      this._agent = values["agent"];
    }
    
  }
}

export default TriggerEventToExcludedAgentTypes;
