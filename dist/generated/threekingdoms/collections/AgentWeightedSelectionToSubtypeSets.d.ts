import { CollectionCache, CollectionKey } from "../../../common";
import { AgentWeightedSelectionSets } from "./AgentWeightedSelectionSets";
import { Agents } from "./Agents";
import { AgentSpawnReasonEnums } from "./AgentSpawnReasonEnums";
import { AgentSubtypeWeightedSelectionSets } from "./AgentSubtypeWeightedSelectionSets";
export declare namespace AgentWeightedSelectionToSubtypeSets {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _agentSet: string;
        readonly _agent: string;
        readonly _spawnReason: string;
        readonly _subtypeSet: string;
        constructor(collectionCache: CollectionCache, values: any);
        get agentSet(): AgentWeightedSelectionSets.Entry | undefined;
        get agent(): Agents.Entry | undefined;
        get spawnReason(): AgentSpawnReasonEnums.Entry | undefined;
        get subtypeSet(): AgentSubtypeWeightedSelectionSets.Entry | undefined;
    }
}
export default AgentWeightedSelectionToSubtypeSets;
