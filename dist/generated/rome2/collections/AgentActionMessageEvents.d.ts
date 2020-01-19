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
        get criticalFailure(): MessageEvents.Entry | undefined;
        get failure(): MessageEvents.Entry | undefined;
        get opportuneFailure(): MessageEvents.Entry | undefined;
        get success(): MessageEvents.Entry | undefined;
        get criticalSuccess(): MessageEvents.Entry | undefined;
    }
}
export default AgentActionMessageEvents;
