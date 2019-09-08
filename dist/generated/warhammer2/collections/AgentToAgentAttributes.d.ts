import { CollectionCache, CollectionKey } from "../../../common";
import { AgentAttributes } from "./AgentAttributes";
import { Agents } from "./Agents";
export declare namespace AgentToAgentAttributes {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _attribute: string;
        readonly _agent: string;
        readonly defaultValue: number;
        constructor(collectionCache: CollectionCache, values: any);
        readonly attribute: AgentAttributes.Entry | undefined;
        readonly agent: Agents.Entry | undefined;
    }
}
export default AgentToAgentAttributes;
