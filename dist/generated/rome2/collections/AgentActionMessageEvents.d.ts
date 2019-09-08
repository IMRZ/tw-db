import { CollectionCache, CollectionKey } from "../../../common";
import { MessageEvents } from "./MessageEvents";
export declare namespace AgentActionMessageEvents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _criticalFailure: string;
        readonly _failure: string;
        readonly _opportuneFailure: string;
        readonly _success: string;
        readonly _criticalSuccess: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly criticalFailure: MessageEvents.Entry | undefined;
        readonly failure: MessageEvents.Entry | undefined;
        readonly opportuneFailure: MessageEvents.Entry | undefined;
        readonly success: MessageEvents.Entry | undefined;
        readonly criticalSuccess: MessageEvents.Entry | undefined;
    }
}
export default AgentActionMessageEvents;
