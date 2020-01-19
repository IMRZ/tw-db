import { CollectionCache, CollectionKey } from "../../../common";
import { AgentSubtypeWeightedSelectionSets } from "./AgentSubtypeWeightedSelectionSets";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace AgentSubtypeWeightedSelectionSetToWeights {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly _subtypeSet: string;
        readonly _agentSubtype: string;
        readonly isMale: boolean;
        readonly selectionWeight: number;
        constructor(collectionCache: CollectionCache, values: any);
        get subtypeSet(): AgentSubtypeWeightedSelectionSets.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
    }
}
export default AgentSubtypeWeightedSelectionSetToWeights;
