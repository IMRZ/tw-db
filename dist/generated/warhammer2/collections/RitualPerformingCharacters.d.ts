import { CollectionCache, CollectionKey } from "../../../common";
import { Agents } from "./Agents";
import { AgentSubtypes } from "./AgentSubtypes";
export declare namespace RitualPerformingCharacters {
    const KEY: CollectionKey;
    class Entry {
        private readonly collectionCache;
        readonly key: string;
        readonly _agentType: string;
        readonly _agentSubtype: string;
        readonly recoveryTime: number;
        readonly minimumLevel: number;
        constructor(collectionCache: CollectionCache, values: any);
        get agentType(): Agents.Entry | undefined;
        get agentSubtype(): AgentSubtypes.Entry | undefined;
    }
}
export default RitualPerformingCharacters;
