import { CollectionCache, CollectionKey } from "../../../common";
export declare namespace AgentVoiceEventsJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentKey: any;
        readonly _voiceEventKey: any;
        readonly _soundEventKey: any;
        constructor(collectionCache: CollectionCache, values: any);
    }
}
export default AgentVoiceEventsJunctions;
