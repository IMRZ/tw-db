import { CollectionCache, CollectionKey } from "../../../common";
import { RitualPayloads } from "./RitualPayloads";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace RitualPayloadSpawnAgents {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _payload: string;
        readonly _agentType: string;
        readonly _agentSubtype: string;
        readonly spawnToPool: boolean;
        constructor(collectionCache: CollectionCache, values: any);
        readonly payload: RitualPayloads.Entry | undefined;
        readonly agentType: Agents.Entry | undefined;
        readonly agentSubtype: AgentSubtypes.Entry | undefined;
    }
}
export default RitualPayloadSpawnAgents;
