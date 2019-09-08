
import { CollectionCache, CollectionKey } from "../../../common";


export namespace AgentVoiceEventsJunctions {
  export const KEY = new CollectionKey("agent_voice_events_junctions");

  export class Entry {
    private readonly collectionCache: CollectionCache;

    readonly _agentKey: any;
    readonly _voiceEventKey: any;
    readonly _soundEventKey: any;

    constructor(collectionCache: CollectionCache, values: any) {
      this.collectionCache = collectionCache;
      this._agentKey = values["agent_key"];
      this._voiceEventKey = values["voice_event_key"];
      this._soundEventKey = values["sound_event_key"];
    }
    
  }
}

export default AgentVoiceEventsJunctions;
