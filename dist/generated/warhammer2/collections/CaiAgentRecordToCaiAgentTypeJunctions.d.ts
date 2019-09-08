import { CollectionCache, CollectionKey } from "../../../common";
import { CaiAgentTypes } from "./CaiAgentTypes";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace CaiAgentRecordToCaiAgentTypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentTypeKey: string;
        readonly _agentRecordKey: string;
        readonly _agentSubtypeKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agentTypeKey: CaiAgentTypes.Entry | undefined;
        readonly agentRecordKey: Agents.Entry | undefined;
        readonly agentSubtypeKey: AgentSubtypes.Entry | undefined;
    }
}
export default CaiAgentRecordToCaiAgentTypeJunctions;
