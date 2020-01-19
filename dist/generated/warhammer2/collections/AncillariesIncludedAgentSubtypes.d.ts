import { CollectionCache, CollectionKey } from "../../../common";
import { Ancillaries } from "./Ancillaries";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace AncillariesIncludedAgentSubtypes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _ancillary: string;
        readonly _agentSubtype: string;
        constructor(collectionCache: CollectionCache, values: any);
        get ancillary(): Ancillaries.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
    }
}
export default AncillariesIncludedAgentSubtypes;
