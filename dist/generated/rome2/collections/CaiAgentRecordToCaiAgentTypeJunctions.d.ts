import { CollectionCache, CollectionKey } from "../../../common";
import { CaiAgentTypes } from "./CaiAgentTypes";
import { Agents } from "./Agents";
export declare namespace CaiAgentRecordToCaiAgentTypeJunctions {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentTypeKey: string;
        readonly _agentRecordKey: string;
        constructor(collectionCache: CollectionCache, values: any);
        readonly agentTypeKey: CaiAgentTypes.Entry | undefined;
        readonly agentRecordKey: Agents.Entry | undefined;
    }
}
export default CaiAgentRecordToCaiAgentTypeJunctions;
